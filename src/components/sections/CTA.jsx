import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-600 px-8 py-16 shadow-2xl shadow-brand-600/30 sm:px-16 sm:py-24">
          {/* Ambient decorations */}
          <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl" />

          {/* Dot pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm">
              Get Started Today
            </span>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Ready to grow your own fresh food?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-50/90 sm:text-lg">
              Talk to our team and get a tailored hydroponic setup for your
              home, restaurant or commercial farm. Installations start in
              under two weeks.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-700 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+15552401190"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/70 hover:bg-white/20"
              >
                <PhoneCall className="h-4 w-4" />
                Talk to Sales
              </a>
            </div>

            <p className="mt-6 text-xs text-brand-50/70">
              No commitment · Free consultation · Response within 24h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}