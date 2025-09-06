import { useState, useEffect } from "react";
import {
  Send,
  Check,
  Minimize2,
  ThumbsUp,
  ThumbsDown,
  AlertCircle,
  Loader2,
  X,
} from "lucide-react";

const deals = [
  {
    name: "Starter Website",
    price: "$30+",
    features: [
      "Landing page / portfolio site",
      "Responsive modern UI (Next.js, Tailwind)",
      "Basic deployment (Vercel/Netlify)",
      "1 month support",
    ],
  },
  {
    name: "Growth Package",
    price: "$300+",
    features: [
      "Full-stack web application",
      "API integration & database setup",
      "CI/CD pipelines (GitHub Actions, GitLab CI)",
      "Cloud deployment (AWS free tier, Docker, Kubernetes basics)",
      "3 months support",
    ],
    highlight: true,
  },
  {
    name: "Consultation",
    price: "$20/hr",
    features: [
      "Project architecture planning",
      "Code audit & optimization",
      "One-to-one mentorship (Web)",
    ],
  },
];

const API_BASE_URL = "https://api.jiallama.edu.pk/portfolio/";

export default function ContactDetails({ index = 0 }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [feedback, setFeedback] = useState({
    like: 0,
    dislike: 0,
    userFeedback: null,
  });
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
  const expanded = false;

  // Load feedback on component mount
  useEffect(() => {
    loadFeedback();
  }, []);

  const loadFeedback = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/feedback`);
      if (response.ok) {
        const data = await response.json();
        setFeedback(data);
      }
    } catch (error) {
      console.error("Error loading feedback:", error);
    }
  };

  const handleInputChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setSubmitMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      setSubmitMessage("Please enter your email");
      return false;
    }
    if (!formData.message.trim()) {
      setSubmitMessage("Please enter a message");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage("Please enter a valid email address");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Message sent successfully! I'll get back to you within 24 hours."
        );
        setFormData({ name: "", email: "", project: "", message: "" });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          data.error || "Failed to send message. Please try again."
        );
      }

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 6000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFeedback = async (type: string) => {
    if (feedbackLoading) return;

    setFeedbackLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type }),
      });

      if (response.ok) {
        const data = await response.json();
        setFeedback(data);
        setShowFeedbackMessage(true);
        setTimeout(() => setShowFeedbackMessage(false), 3000);
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    } finally {
      setFeedbackLoading(false);
    }
  };

  const collapse = (index: number) => {
    console.log("Collapse section:", index);
  };

  return (
    <section className="bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="container space-y-10 p-6">
        {/* Heading */}
        <div className="">
          <div className="flex gap-4">
            <h2 className="text-3xl font-semibold mb-2 flex justify-between w-full items-center">
              <span>Work Together</span>
              {!expanded && (
                <span
                  className="text-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-800 cursor-pointer"
                  onClick={() => collapse(index)}
                >
                  <Minimize2 />
                </span>
              )}
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Choose your package or send a custom message
          </p>
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div
            className={`flex items-start gap-3 p-4 rounded-lg border ${
              submitStatus === "success"
                ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
            }`}
          >
            <div className="flex-shrink-0">
              {submitStatus === "success" ? (
                <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              )}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm ${
                  submitStatus === "success"
                    ? "text-green-800 dark:text-green-200"
                    : "text-red-800 dark:text-red-200"
                }`}
              >
                {submitMessage}
              </p>
            </div>
            <button
              onClick={() => setSubmitStatus(null)}
              className={`flex-shrink-0 ${
                submitStatus === "success"
                  ? "text-green-400 hover:text-green-600"
                  : "text-red-400 hover:text-red-600"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {showFeedbackMessage && (
          <div className="flex items-center gap-2 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Thank you for your feedback! It helps me improve.
            </p>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pricing Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-6 text-neutral-700 dark:text-neutral-300">
              Service Packages
            </h3>
            {deals.map((deal, i) => (
              <div
                key={i}
                className={`p-5 rounded-lg border transition-colors ${
                  deal.highlight
                    ? "border-neutral-400 bg-white shadow-sm dark:border-neutral-600 dark:bg-neutral-900/60"
                    : "border-neutral-300 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/30"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium">{deal.name}</h4>
                  <span className="text-neutral-700 dark:text-neutral-300 font-medium">
                    {deal.price}
                  </span>
                </div>
                <ul className="space-y-1">
                  {deal.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-neutral-400 dark:bg-neutral-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
              Custom quotes available for larger projects
            </p>

            {/* Feedback Section */}
            <div className="mt-8 p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/50">
              <h4 className="text-sm font-medium mb-3 text-neutral-700 dark:text-neutral-300">
                How helpful is this pricing information?
              </h4>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleFeedback("like")}
                  disabled={feedbackLoading || feedback.userFeedback === "like"}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors disabled:cursor-not-allowed ${
                    feedback.userFeedback === "like"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                      : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>{feedback.like}</span>
                </button>
                <button
                  onClick={() => handleFeedback("dislike")}
                  disabled={
                    feedbackLoading || feedback.userFeedback === "dislike"
                  }
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors disabled:cursor-not-allowed ${
                    feedback.userFeedback === "dislike"
                      ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                      : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                  <span>{feedback.dislike}</span>
                </button>
                {feedbackLoading && (
                  <Loader2 className="w-4 h-4 animate-spin text-neutral-400" />
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-neutral-700 dark:text-neutral-300">
              Send Message
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-white dark:bg-neutral-900 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  Project Type
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-500 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Starter Package">Starter Package</option>
                  <option value="Growth Package">Growth Package</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Custom Project">Custom Project</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white dark:bg-neutral-900 placeholder:text-neutral-500 dark:placeholder:text-neutral-500 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 disabled:bg-neutral-600 disabled:cursor-not-allowed transition-colors dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:disabled:bg-neutral-600 dark:disabled:text-neutral-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/50 shadow-sm">
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I typically respond within 24 hours. For urgent matters, you can
                also reach me directly at{" "}
                <a
                  href="mailto:a.official.haseeb@gmail.com"
                  className="text-neutral-900 dark:text-white underline hover:no-underline"
                >
                  a.official.haseeb@gmail.com
                </a>
              </p>
            </div>

            {/* API Status Indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Backend connected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
