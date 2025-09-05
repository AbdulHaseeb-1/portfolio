import { useExpanded } from "@/contexts/expand-provider";
import {
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Minimize2,
} from "lucide-react";

export default function EducationDetails({ index }: { index: number }) {
  const { collapse, expanded } = useExpanded();

  const educationData = {
    degree: {
      title: "Bachelor's in Computer Science",
      institution: "University of Sargodha (UOS)",
      period: "2021–2025",
      gpa: "3.7 / 4.0",
    },
    specialization: "Web Development & DevOps",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Programming",
    ],
    achievements: [
      "Dean’s Honor List (2022, 2023)",
      "Winner, UOS Hackathon 2023",
    ],
    projects: [
      "Rusty UI (A user interface library)",
      "CI/CD automation using GitHub Actions & Docker",
    ],
    certifications: [
      "AWS Cloud Practitioner",
      // "Docker & Kubernetes Fundamentals",
    ],
  };

  return (
    <section className=" py-16  text-neutral-900 dark:bg-neutral-950 dark:text-white transition-colors">
      <div className="container  mx-auto px-6 space-y-10">
        {/* Header */}
        <div>
          <div className="flex gap-4">
            <h2 className="text-3xl font-semibold mb-2 flex justify-between w-full items-center">
              <span>Education</span>
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
            Academic background, specialization, and key achievements
          </p>
        </div>

        {/* Degree */}
        <div className="p-6 col-span-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 transition-colors">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-neutral-100 dark:bg-neutral-800">
              <GraduationCap className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-base lg:text-lg font-medium mb-1">
                {educationData.degree.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-1">
                {educationData.degree.institution}
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded-md">
                  {educationData.degree.period}
                </span>
                <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded-md">
                  GPA: {educationData.degree.gpa}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Specialization */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Specialization
              </span>
            </div>
            <p className="ml-7 text-neutral-900 dark:text-white">
              {educationData.specialization}
            </p>
          </div>

          {/* Coursework */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Key Coursework
              </span>
            </div>
            <div className="ml-7 flex flex-wrap gap-2">
              {educationData.coursework.map((course, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Academic Projects
              </span>
            </div>
            <ul className="ml-7 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              {educationData.projects.map((proj, index) => (
                <li key={index}>• {proj}</li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Certifications
              </span>
            </div>
            <div className="ml-7 flex flex-wrap gap-2">
              {educationData.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs rounded-md"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
