import { ExternalLink, Github, Minimize2 } from "lucide-react";
import { motion } from "framer-motion";
import { useExpanded } from "@/contexts/expand-provider";

export default function ProjectDetails({ index }: { index: number }) {
  const { collapse,expanded } = useExpanded();

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with inventory, payments, and admin dashboard.",
      category: "Full Stack",
      technologies: ["React", "Next.js", "MySQL", "Stripe"],
      status: "On Github",
      links: {
        github: "https://github.com/user/ecommerce",
      },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and analytics.",
      category: "Web App",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      status: "In Development",
      links: {
        live: "https://tasks.example.com",
        github: "https://github.com/user/taskapp",
      },
    },
  ];

  return (
    <section className="py-16 px-6 bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors">
      <div className="mb-12 ">
        <div className="flex gap-4">
          <h2 className="text-3xl font-semibold mb-2 flex justify-between w-full items-center">
            <span> Projects</span>
          {!expanded && (
                <span
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
            className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 hover:border-amber-400/40 transition-colors"
          >
            {/* Category + Status */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 text-[11px] uppercase tracking-wide bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md">
                {project.category}
              </span>
              <span className="px-2 py-0.5 text-[11px] rounded-md bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-medium mb-2">{project.title}</h3>

            {/* Description */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="flex items-center gap-1 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="flex items-center gap-1 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
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
