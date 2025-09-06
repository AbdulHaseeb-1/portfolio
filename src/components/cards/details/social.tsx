import { Linkedin, Instagram, Mail, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { useExpanded } from "@/contexts/expand-provider";
import { colorScheme } from "@/lib/styles";

const socials = [
  {
    name: "WhatsApp",
    url: "https://wa.me/923001234567",
    icon: FaWhatsapp,
    color:
      "hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/yourusername",
    icon: Instagram,
    color:
      "hover:bg-pink-500/10 hover:text-pink-600 dark:hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]",
  },
  {
    name: "Discord",
    url: "https://discord.gg/yourinvite",
    icon: FaDiscord,
    color:
      "hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
    color:
      "hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]",
  },
  {
    name: "Email",
    url: "mailto:youremail@example.com",
    icon: Mail,
    color:
      "hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]",
  },
];

export default function SocialDetails({ index }: { index: number }) {
  const { collapse, expanded } = useExpanded();
  return (
    <section className="  bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors">
      <div className="container space-y-10 ">
        <div>
          <div className="flex gap-4">
            <h2 className="text-3xl font-semibold mb-2 flex justify-between w-full items-center">
              <span>Social</span>
              {!expanded && (
                <span
                className="text-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-800"
                
                  onClick={() => {
                    collapse(index);
                  }}
                >
                  <Minimize2 />
                </span>
              )}
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Find me across the web
          </p>
        </div>

        {/* Social cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl border 
                border-neutral-200 dark:border-neutral-800 
                bg-white/70 dark:bg-neutral-900/50 
                backdrop-blur-sm transition ${colorScheme.shadow} dark:hover:border-white hover:border-black `}
              >
                <Icon className="w-6 h-6" />
                <div>
                  <p className="font-medium">{s.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    {s.url}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
