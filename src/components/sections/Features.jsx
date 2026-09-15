import { features } from '../../data/features';
import SectionHeading from '../ui/SectionHeading';

export default function Features() {
  return (
    <section id="solutions" className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Solutions"
          title="Everything you need to grow smarter"
          description="A complete ecosystem of hardware, sensors and software engineered to make hydroponic farming effortless, efficient and profitable."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-2xl"
              >
                <div
                  className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} shadow-md`}
                >
                  <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
                </div>

                <h3 className="relative mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 ${feature.color} transition-all duration-500 group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}