import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    { icon: Github, href: "https://github.com/yourname", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourname",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com/yourname", label: "Twitter" },
    { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  ];

  return (
    <footer
      className="relative  flex flex-col items-center justify-center gap-4 py-12 px-6 w-full 
                       
                 border-neutral-800/50 text-neutral-400"
    >
      {/* Neon ring backdrop */}
      {/* <div className="absolute -top-16 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" /> */}

      {/* Branding */}
      <h2 className="text-xl font-bold tracking-wide text-amber-400 drop-shadow-[0_0_6px_rgba(255,191,0,0.5)]">
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
            className="p-2 rounded-full border border-neutral-700/40 bg-neutral-900/50 
                       hover:border-amber-400/60 hover:text-amber-300 hover:scale-110 
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
