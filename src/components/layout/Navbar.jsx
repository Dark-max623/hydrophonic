import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, Sprout } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '../../utils/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Leaf
              className={`h-8 w-8 transition-colors duration-300 ${
                scrolled ? 'text-brand-600' : 'text-white'
              }`}
              strokeWidth={2.2}
            />
            <Sprout
              className={`absolute -bottom-1 -right-1 h-4 w-4 transition-colors duration-300 ${
                scrolled ? 'text-brand-400' : 'text-brand-200'
              }`}
              strokeWidth={2.5}
            />
          </div>
          <span
            className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            {COMPANY.name.slice(0, 5)}
            <span className="text-brand-500">{COMPANY.name.slice(5)}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? isActive
                        ? 'text-brand-600'
                        : 'text-slate-700 hover:text-brand-600'
                      : isActive
                      ? 'text-brand-200'
                      : 'text-white/90 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-brand-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA + mobile button */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex ${
              scrolled
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:-translate-y-0.5'
                : 'bg-white/15 text-white ring-1 ring-inset ring-white/30 backdrop-blur-sm hover:bg-white/25'
            }`}
          >
            Get Started
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
              scrolled
                ? 'text-slate-900 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[68px] z-40 transition-all duration-300 ${
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative mx-4 mt-2 rounded-3xl bg-white p-6 shadow-2xl transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-primary mt-4 w-full">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}