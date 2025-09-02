import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
    color: "hover:border-purple-500 hover:text-purple-400",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    color: "hover:border-blue-500 hover:text-blue-400",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
    color: "hover:border-sky-500 hover:text-sky-400",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: Instagram,
    color: "hover:border-pink-500 hover:text-pink-400",
  },
  {
    name: "Email",
    url: "mailto:youremail@example.com",
    icon: Mail,
    color: "hover:border-amber-500 hover:text-amber-400",
  },
];

export default function SocialDetails() {
  return (
    <section className="py-12 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-amber-400">Social</span>
          </h2>
          <p className="mt-2 text-neutral-400">
            Find me across the web
          </p>
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition ${s.color}`}
              >
                <Icon className="w-6 h-6" />
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-xs text-neutral-500 truncate">{s.url}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
