import { useState } from "react";
import { Send, Check, Minimize2 } from "lucide-react";
import { useExpanded } from "@/contexts/expand-provider";

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
  // {
  //   name: "DevOps & Scaling",
  //   price: "$25–50/hr",
  //   features: [
  //     "Infrastructure as Code (Terraform, Ansible)",
  //     "Cloud automation (AWS, GCP, Azure)",
  //     "Kubernetes setup & best practices",
  //     "Monitoring & logging (Prometheus, Grafana)",
  //     "System design & scalability review"
  //   ],
  // },
  {
    name: "Consultation",
    price: "$20/hr",
    features: [
      "Project architecture planning",
      "Code audit & optimization",
      // "DevOps pipeline review",
      "One-to-one mentorship (Web)",
      // "One-to-one mentorship (Web & DevOps)"
    ],
  },
];

export default function ContactDetails({ index }: { index: number }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { expanded, collapse } = useExpanded();

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Here you would typically send the email
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="py-12">
          <div className="flex gap-4">
            <h2 className="text-3xl font-semibold mb-2 flex justify-between w-full items-center">
              <span>Work Together</span>
              {!expanded && (
                <span
                  onClick={() => {
                    collapse(index);
                  }}
                >
                  <Minimize2 />
                </span>
              )}{" "}
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Choose your package or send a custom message{" "}
          </p>
        </div>

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
                    Name
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
                    Email
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
                  <option value="starter">Starter Package</option>
                  <option value="growth">Growth Package</option>
                  <option value="consultation">Consultation</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                  Message
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
                disabled={isSubmitted}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 disabled:bg-green-600 disabled:text-white transition-colors dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    Message Sent
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
                  href="mailto:youremail@example.com"
                  className="text-neutral-900 dark:text-white underline hover:no-underline"
                >
                  youremail@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
