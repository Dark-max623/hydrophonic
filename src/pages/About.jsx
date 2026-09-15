import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Leaf,
  Droplets,
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Stats from '../components/sections/Stats';
import CTA from '../components/sections/CTA';

const values = [
  {
    icon: Leaf,
    title: 'Sustainability First',
    text: 'Every design decision is measured against its environmental footprint.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    text: 'Industrial-grade components and rigorous testing in every unit we ship.',
  },
  {
    icon: Heart,
    title: 'Grower Obsessed',
    text: 'We build tools we would want in our own greenhouses — because we use them.',
  },
  {
    icon: TrendingUp,
    title: 'Constant Innovation',
    text: 'Our R&D lab iterates on firmware and hardware every single quarter.',
  },
];

const team = [
  {
    name: 'Elena Vasquez',
    role: 'Founder & CEO',
    avatar: 'https://i.pravatar.cc/300?img=47',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Engineering',
    avatar: 'https://i.pravatar.cc/300?img=15',
  },
  {
    name: 'Aisha Bello',
    role: 'Director of Agronomy',
    avatar: 'https://i.pravatar.cc/300?img=48',
  },
  {
    name: 'Liam O’Connor',
    role: 'Head of Product',
    avatar: 'https://i.pravatar.cc/300?img=33',
  },
];

const milestones = [
  { year: '2018', title: 'Founded', text: 'Started in a Portland garage with one prototype tower.' },
  { year: '2020', title: 'First 1,000 Farms', text: 'Reached a thousand active HydroGrow installations worldwide.' },
  { year: '2022', title: 'SmartSense Launch', text: 'Released our IoT sensor kit with full cloud dashboards.' },
  { year: '2024', title: 'Carbon Neutral', text: 'Achieved net-zero operational emissions across all facilities.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=2000&q=80"
            alt="Hydroponic greenhouse"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-brand-950/70" />
        </div>
        <div className="pointer-events-none absolute -top-24 left-1/3 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

        <div className="container-x relative">
          <SectionHeading
            light
            align="left"
            eyebrow="About Us"
            title="We're rebuilding how the world grows food"
            description="HydroGrow was born from a simple belief: fresh, nutritious produce should be accessible to everyone, everywhere — without costing the planet."
          />
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80"
                alt="HydroGrow team at work"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden w-64 rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50">
                  <Users className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">12,000+</p>
                  <p className="text-xs text-slate-500">Active growers</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="From a garage prototype to a global platform"
              description="In 2018, our founders set out to solve a problem they kept running into: traditional farming uses too much water, too much land, and too many chemicals. So they built a better way."
            />

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Today, HydroGrow powers rooftop farms in Lagos, restaurant
              gardens in Tokyo and commercial installations across three
              continents. Every system we ship continues to push the boundary
              of what efficient agriculture can look like.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                  <Award className="h-5 w-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Award-winning</p>
                  <p className="text-xs text-slate-500">AgriTech Innovation 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                  <Droplets className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">4.2M Litres</p>
                  <p className="text-xs text-slate-500">Water saved to date</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles behind every product"
            description="Four commitments guide everything we design, build and ship."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-slate-100 bg-slate-50/60 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-100 hover:bg-white hover:shadow-xl"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-brand-600" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Journey"
            title="Milestones along the way"
            description="A few moments that shaped HydroGrow into what it is today."
          />

          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-500 via-brand-300 to-transparent md:left-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col gap-4 pl-12 md:flex-row md:items-center md:gap-8 md:pl-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 md:text-right">
                    <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
                      {m.year}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-slate-900">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{m.text}</p>
                  </div>
                  <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 ring-4 ring-brand-100 md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the people behind HydroGrow"
            description="A multidisciplinary team of engineers, agronomists and designers."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-brand-100 transition-all duration-500 group-hover:ring-brand-300">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}