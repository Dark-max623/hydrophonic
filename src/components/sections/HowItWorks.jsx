import { useState } from 'react';
import { Cpu, Droplets, Sprout, Package } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    icon: Sprout,
    title: 'Plant',
    description:
      'Place seedlings into the tower grow sites using our compostable media — no soil required.',
  },
  {
    icon: Cpu,
    title: 'Monitor',
    description:
      'Smart sensors track pH, EC, nutrients and climate in real-time, syncing to your dashboard.',
  },
  {
    icon: Droplets,
    title: 'Nourish',
    description:
      'The auto-dosing system delivers the perfect nutrient mix and recirculates water continuously.',
  },
  {
    icon: Package,
    title: 'Harvest',
    description:
      'Pick fresh, pesticide-free produce in as little as 21 days — then replant and repeat.',
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-x relative">
        <SectionHeading
          light
          eyebrow="How It Works"
          title="From seed to harvest in four simple steps"
          description="A fully automated growth cycle designed for anyone — from home growers to commercial farms."
        />

        {/* Steps */}
        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = active === i;
            return (
              <button
                key={step.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group relative rounded-3xl border p-8 text-left transition-all duration-500 ${
                  isActive
                    ? 'border-brand-500/50 bg-white/5 shadow-2xl shadow-brand-500/10'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                {/* Step number */}
                <span className="absolute right-6 top-6 text-5xl font-black text-white/5">
                  0{i + 1}
                </span>

                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-br from-brand-500 to-emerald-600 shadow-lg shadow-brand-500/30'
                      : 'bg-white/10'
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 transition-colors ${
                      isActive ? 'text-white' : 'text-brand-300'
                    }`}
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>

                {/* Progress bar */}
                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className={`h-full bg-gradient-to-r from-brand-500 to-cyan-500 transition-all duration-700 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Connector line (desktop) */}
        <div className="pointer-events-none absolute left-0 right-0 top-[55%] hidden lg:block">
          <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}