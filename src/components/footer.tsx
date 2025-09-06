import { Github, Linkedin,  Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: Github, href: "https://github.com/AbdulHaseeb-1", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdul-haseeb-325255265",
      label: "LinkedIn",
    },
    { icon: FaWhatsapp, href: "https://wa.me/923441440004", label: "WhatsApp" },
    { icon: Mail, href: "mailto:a.official.haseeb@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className="relative  flex flex-col items-center justify-center gap-4 py-12 px-6 w-full 
                       
                 border-neutral-800/50 text-neutral-400"
    >
      {/* Neon ring backdrop */}
      {/* <div className="absolute -top-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" /> */}

      {/* Branding */}
      <h2 className="text-xl font-bold tracking-wide text-primary ">
        Abdul Haseeb
      </h2>

      {/* Social links */}
      <div className="flex gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-neutral-700/40  
                       hover:border-primary/60 hover:text-primary hover:scale-110 
                       transition-all duration-300"
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      {/* Rights */}
      <p className="text-xs text-neutral-500">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
