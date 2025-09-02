const testimonials = [
  {
    quote:
      "Haseeb transformed our outdated infrastructure into a scalable system. Reliable and efficient.",
    name: "Ayesha Khan",
    role: "CTO, TechWave",
  },
  {
    quote:
      "His DevOps pipelines saved us countless deployment headaches. A real game changer.",
    name: "Ali Raza",
    role: "Engineering Manager, Cloudify",
  },
  {
    quote:
      "Frontend to backend, he handles it all with clarity and speed. Highly recommended.",
    name: "Sara Malik",
    role: "Founder, StartupHub",
  },
];

export default function TestimonialsDetails() {
  return (
    <section className="py-16 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-white mb-2">
            Testimonials
          </h2>
          <p className="text-neutral-400 text-sm">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials List */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border-l-2 border-neutral-800 pl-6"
            >
              <blockquote className="text-neutral-200 leading-relaxed mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <cite className="text-white font-medium text-sm not-italic">
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
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-xs text-center">
            References available upon request
          </p>
        </div>
      </div>
    </section>
  );
}