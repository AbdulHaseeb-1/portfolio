import {
  GraduationCap,
  Award,
  BookOpen,
} from "lucide-react";

export default function EducationDetails() {
  const educationData = {
    degree: {
      title: "B.Sc. Computer Science",
      institution: "State University",
      period: "2021–2025",
    },
    specialization: {
      title: "Web Development & DevOps",
    },
    certifications: ["AWS Cloud Practitioner", "Docker Essentials"],
    favoriteSubjects: ["Programming", "Networking"],
  };

  return (
    <section className="py-16 bg-neutral-950 text-white">
      <div className="max-w-2xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-2">
            Education
          </h2>
          <p className="text-neutral-400 text-sm">
            Academic background and learning journey
          </p>
        </div>

        {/* Main Degree */}
        <div className="mb-8 p-6 rounded-lg border border-neutral-800 bg-neutral-900/30">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-neutral-800">
              <GraduationCap className="w-5 h-5 text-neutral-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-white mb-1">
                {educationData.degree.title}
              </h3>
              <p className="text-neutral-300 text-sm mb-2">
                {educationData.degree.institution}
              </p>
              <span className="inline-block px-3 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-md">
                {educationData.degree.period}
              </span>
            </div>
          </div>
        </div>

        {/* Specialization */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-4 h-4 text-neutral-400" />
            <span className="text-sm font-medium text-neutral-300">
              Specialization
            </span>
          </div>
          <p className="text-white ml-7">
            {educationData.specialization.title}
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-4 h-4 text-neutral-400" />
            <span className="text-sm font-medium text-neutral-300">
              Certifications
            </span>
          </div>
          <div className="ml-7 space-y-2">
            {educationData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                <span className="text-sm text-neutral-300">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Subjects */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-4 h-4 text-neutral-400" />
            <span className="text-sm font-medium text-neutral-300">
              Key Subjects
            </span>
          </div>
          <div className="ml-7 flex flex-wrap gap-2">
            {educationData.favoriteSubjects.map((subject, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-md"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}