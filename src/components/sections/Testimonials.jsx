import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionHeading from '../ui/SectionHeading';

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by growers worldwide"
          description="From rooftop startups to Michelin-starred kitchens — teams choose HydroGrow for reliable, year-round harvests."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                i === 1 ? 'md:-mt-6' : ''
              }`}
            >
              <Quote className="h-10 w-10 text-brand-100" fill="currentColor" />

              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-slate-700">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}