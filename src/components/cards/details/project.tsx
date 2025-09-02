import { ExternalLink, Github, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with inventory, payments, and admin dashboard.",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Live",
      links: {
        live: "https://demo.example.com",
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
    <div className="bg-transparent text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Layers className="h-6 w-6 text-amber-400" />
          <h2 className="text-2xl font-semibold text-neutral-200">Projects</h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -3 }}
              className="rounded-xl border border-neutral-800 p-5 bg-neutral-900/60 hover:border-amber-400/40 transition-colors"
            >
              {/* Category */}
              <p className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="text-lg font-medium text-neutral-100 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 mb-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs rounded-md bg-neutral-800 text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <a
                  href={project.links.live}
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a
                  href={project.links.github}
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
