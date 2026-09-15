import { Leaf, Droplets, Recycle, Wind } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const pillars = [
  {
    icon: Droplets,
    title: 'Water Circularity',
    text: 'Nutrient solution is filtered and recirculated, cutting consumption by up to 90%.',
  },
  {
    icon: Recycle,
    title: 'Zero Waste',
    text: 'Compostable grow media and recyclable tower frames keep waste out of landfills.',
  },
  {
    icon: Wind,
    title: 'Carbon Neutral',
    text: 'Localized production slashes food miles while solar-ready power keeps emissions low.',
  },
  {
    icon: Leaf,
    title: 'Pesticide Free',
    text: 'Sealed grow environments eliminate the need for chemical pesticides entirely.',
  },
];

export default function Sustainability() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {/* Image side */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80"
              alt="Sustainable greenhouse"
              className="h-[520px] w-full object-cover"
            />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-6 hidden w-56 rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50">
                <Leaf className="h-5 w-5 text-brand-600" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-slate-900">4.2M</p>
                <p className="text-xs text-slate-500">Litres water saved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Sustainability"
            title="Farming that gives back to the planet"
            description="Hydroponics isn't just more efficient — it's a fundamentally more responsible way to produce food at scale."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:bg-brand-50/40 hover:shadow-lg"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-brand-600" strokeWidth={2.2} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}