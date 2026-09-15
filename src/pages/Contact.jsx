import ContactSection from '../components/sections/Contact';
import SectionHeading from '../components/ui/SectionHeading';
import { HelpCircle, Clock, Globe } from 'lucide-react';

const quickHelp = [
  {
    icon: HelpCircle,
    title: 'Sales & Quotes',
    text: 'For pricing, custom configurations and bulk orders.',
    email: 'sales@hydrogrow.io',
  },
  {
    icon: Clock,
    title: 'Technical Support',
    text: 'For setup help, troubleshooting and warranty claims.',
    email: 'support@hydrogrow.io',
  },
  {
    icon: Globe,
    title: 'Partnerships',
    text: 'For distributors, resellers and research collaborations.',
    email: 'partners@hydrogrow.io',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1585537884612-95e4e0f2be34?auto=format&fit=crop&w=2000&q=80"
            alt="Contact HydroGrow"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-brand-950/70" />
        </div>
        <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

        <div className="container-x relative">
          <SectionHeading
            light
            align="left"
            eyebrow="Contact"
            title="Let's build your grow system"
            description="Whether you're planning a rooftop farm or a home countertop setup, our team is ready to help you get started."
          />
        </div>
      </section>

      {/* Quick help cards */}
      <section className="bg-white py-16">
        <div className="container-x grid gap-6 sm:grid-cols-3">
          {quickHelp.map(({ icon: Icon, title, text, email }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-100 hover:bg-white hover:shadow-xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Icon className="h-6 w-6 text-brand-600" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              <a
                href={`mailto:${email}`}
                className="mt-4 inline-block text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                {email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Main contact form section (reused) */}
      <ContactSection />
    </>
  );
}