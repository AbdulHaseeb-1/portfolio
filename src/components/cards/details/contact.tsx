import { useState } from "react";
import { Send, Check } from "lucide-react";

const deals = [
  {
    name: "Starter",
    price: "$500+",
    features: ["Landing page / portfolio", "Responsive design", "1 month support"],
  },
  {
    name: "Growth",
    price: "$1500+",
    features: [
      "Full-stack web app",
      "CI/CD pipelines", 
      "Scalable cloud deployment",
      "3 months support",
    ],
    highlight: true,
  },
  {
    name: "Consultation",
    price: "$100/hr",
    features: ["System design review", "DevOps guidance", "Code audit"],
  },
];

export default function ContactDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Here you would typically send the email
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-16 bg-neutral-950 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-white mb-2">
            Work Together
          </h2>
          <p className="text-neutral-400 text-sm">
            Choose your package or send a custom message
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Pricing Options */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium mb-6 text-neutral-200">Service Packages</h3>
            {deals.map((deal, i) => (
              <div
                key={i}
                className={`p-5 rounded-lg border transition-colors ${
                  deal.highlight
                    ? "border-neutral-600 bg-neutral-900/60"
                    : "border-neutral-800 bg-neutral-900/30"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-white">{deal.name}</h4>
                  <span className="text-neutral-300 font-medium">{deal.price}</span>
                </div>
                <ul className="space-y-1">
                  {deal.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-neutral-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-xs text-neutral-500 mt-4">
              Custom quotes available for larger projects
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-neutral-200">Send Message</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Project Type</label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="starter">Starter Package</option>
                  <option value="growth">Growth Package</option>
                  <option value="consultation">Consultation</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-800 rounded-md text-white text-sm focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-md font-medium hover:bg-neutral-100 disabled:bg-green-600 disabled:text-white transition-colors"
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

            <div className="mt-6 p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
              <p className="text-xs text-neutral-400 leading-relaxed">
                I typically respond within 24 hours. For urgent matters, you can also reach me directly at{" "}
                <a href="mailto:youremail@example.com" className="text-white underline hover:no-underline">
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