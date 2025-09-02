import {
  Database,
  Cloud,
  Server,
  Monitor,
  Wrench,
  Brain,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SkillSetDetails() {
  const skillsData = [
    {
      category: "Frontend",
      icon: Monitor,
      color: "text-blue-400",
      bar: "from-blue-500/80",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind", level: 92 },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "text-green-400",
      bar: "from-green-500/80",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 87 },
        { name: "GraphQL", level: 85 },
        { name: "REST APIs", level: 95 },
      ],
    },
    {
      category: "Database",
      icon: Database,
      color: "text-purple-400",
      bar: "from-purple-500/80",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 82 },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "text-orange-400",
      bar: "from-orange-500/80",
      skills: [
        { name: "AWS", level: 92 },
        { name: "Docker", level: 89 },
        { name: "Kubernetes", level: 83 },
        { name: "GitHub Actions", level: 88 },
      ],
    },
    {
      category: "Tools",
      icon: Wrench,
      color: "text-cyan-400",
      bar: "from-cyan-500/80",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Jest", level: 88 },
        { name: "Figma", level: 83 },
      ],
    },
  ];

  return (
    <div className=" bg-neutral-950 text-white p-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-amber-500/10 rounded-xl">
              <Brain className="h-7 w-7 text-amber-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">
            My <span className="text-amber-400">Skills</span>
          </h2>
          <p className="text-neutral-400 mt-2 text-sm">
            Focused, evolving, and performance-driven
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillsData.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900/40 rounded-2xl p-5 border border-neutral-800 hover:border-neutral-700 transition-all"
              >
                {/* Category */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 bg-neutral-800/50 rounded-lg`}>
                    <Icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-medium">{category.category}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neutral-300">{skill.name}</span>
                        <span className="text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: j * 0.15 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.bar} to-transparent`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Current Focus */}
        <div className="text-center mt-12">
          <p className="text-neutral-500 text-sm mb-4">Currently exploring</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["AI/ML", "Web3", "Edge Computing", "Serverless"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-neutral-900/60 border border-neutral-800 rounded-full text-sm text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

