import { ExternalLink, Github, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";
import { useExpanded } from "@/contexts/expand-provider";

export default function ProjectDetails({ index }: { index: number }) {
  const { collapse, expanded } = useExpanded();

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with inventory, payments, and admin dashboard.",
      category: "Full Stack",
      technologies: ["React", "Next.js", "MySQL", "Stripe", "Typescript"],
      status: "On Github",
      links: {
        github: "https://github.com/user/ecommerce",
      },
    },
    {
      id: 2,
      title: "Rusty UI (Web UI Library) [Under Development]",
      description:
        "A reusable, efficient UI component library designed to integrate with modern frameworks.",
      category: "UI Library",
      technologies: ["React","Next Js" ,"Tailwind", "TypeScript"],
      status: "In Development",
      links: {
        github: "https://github.com/AbdulHaseeb-1/rusty-ui",
      },
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern developer portfolio site with modern design",
      category: "Portfolio",
      technologies: ["Next.js", "React", "Tailwind", "Framer Motion"],
      status: "On Github",
      links: {
        github: "https://github.com/AbdulHaseeb-1/candle-king",
      },
    },
    {
      id: 5,
      title: "Madrissa Website",
      description:
        "Educational platform for a madrissa featuring fatwas and bayanat",
      category: "Web App",
      technologies: ["Next.js", "React", "Tailwind", "Node Js", "MongoDB"],
      status: "Live",
      links: {
        live: "https://jiallama.edu.pk",
      },
    },
  ];

  return (
    <section className="space-y-10  text-black dark:bg-black dark:text-white transition-colors">
      <div>
        <div className="flex gap-4">
          <h2 className="text-3xl font-semibold mb-2 flex justify-between w-full items-center">
            <span>Projects</span>
            {!expanded && (
              <span className="cursor-pointer" onClick={() => collapse(index)}>
                <Minimize2 />
              </span>
            )}
          </h2>
        </div>
        <p className="text-sm">
          Selected work showcasing technical skills and creativity
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-xl border border-neutral-300 dark:border-neutral-700"
          >
            {/* Category + Status */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 text-[11px] uppercase tracking-wide rounded-md border border-neutral-300 dark:border-neutral-700">
                {project.category}
              </span>
              <span className="px-2 py-0.5 text-[11px] rounded-md border border-neutral-300 dark:border-neutral-700">
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-medium mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-sm mb-4">{project.description}</p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 border border-neutral-300 dark:border-neutral-700 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-sm">
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="flex items-center gap-1 underline"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="flex items-center gap-1 underline"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
