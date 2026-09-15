import { Link } from 'react-router-dom';
import { Leaf, Sprout, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../../utils/constants';

const solutions = [
  { name: 'Vertical Towers', to: '/products' },
  { name: 'Smart Sensors', to: '/products' },
  { name: 'Nutrient Systems', to: '/products' },
  { name: 'Consulting', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Newsletter bar */}
      <div className="relative border-b border-white/5">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Grow smarter with HydroGrow
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Weekly insights on hydroponics, vertical farming &amp; smart agriculture.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-500 focus:bg-white/10"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:-translate-y-0.5"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative container-x grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <Leaf className="h-8 w-8 text-brand-500" strokeWidth={2.2} />
              <Sprout className="absolute -bottom-1 -right-1 h-4 w-4 text-brand-300" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Hydro<span className="text-brand-500">Grow</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Building the future of food with intelligent vertical hydroponic
            systems — less water, more yield, zero compromise.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigate
          </h4>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-brand-400"
                >
                  <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-4" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Solutions
          </h4>
          <ul className="mt-4 space-y-3">
            {solutions.map((s) => (
              <li key={s.name}>
                <Link
                  to={s.to}
                  className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-brand-400"
                >
                  <span className="h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-4" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3 text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-brand-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand-500" />
                {COMPANY.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-slate-400 transition-colors hover:text-brand-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-brand-500" />
                {COMPANY.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-brand-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-brand-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}