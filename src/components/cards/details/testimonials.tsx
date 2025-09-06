import { useExpanded } from "@/contexts/expand-provider";
import { Minimize2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "To be taken...",
    name: "Rasheed Ahmed",
    role: "Client",
  },
  // {
  //   quote:
  //     "His DevOps pipelines saved us countless deployment headaches. A real game changer.",
  //   name: "Ali Raza",
  //   role: "Engineering Manager, Cloudify",
  // },
  // {
  //   quote:
  //     "Frontend to backend, he handles it all with clarity and speed. Highly recommended.",
  //   name: "Sara Malik",
  //   role: "Founder, StartupHub",
  // },
];

export default function TestimonialsDetails({ index }: { index: number }) {
  const { collapse, expanded } = useExpanded();

  return (
    <section className=" bg-neutral-50 text-neutral-900 dark:bg-black dark:text-white transition-colors">
      <div className="container space-y-10 ">
        {/* Heading */}
        <div className="">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-semibold">Testimonials</h2>
            {!expanded && (
              <button
              className="text-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-200 hover:text-neutral-800"
             
                onClick={() => collapse(index)}
                // className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                title="Collapse"
              >
                <Minimize2  />
              </button>
            )}
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials List */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-6"
            >
              <blockquote className="text-neutral-700 dark:text-neutral-200 leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <cite className="text-neutral-900 dark:text-white font-medium text-sm not-italic">
                  {testimonial.name}
                </cite>
                <p className="text-neutral-500 text-xs mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-neutral-500 text-xs text-center">
            References available upon request
          </p>
        </div>
      </div>
    </section>
  );
}
