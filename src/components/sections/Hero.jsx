import { Link } from 'react-router-dom';
import {
  ArrowRight,
  PlayCircle,
  Droplets,
  Sprout,
  Leaf,
  Wind,
} from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1585537884612-95e4e0f2be34?auto=format&fit=crop&w=2000&q=80"
          alt="Vertical hydroponic farm"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-slate-950/85" />
      </div>

      {/* Ambient blobs — flat green only */}
      <div className="pointer-events-none absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl animate-float" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-200 ring-1 ring-inset ring-white/20 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
            Next-gen hydroponic farming
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Grow more.
            <br />
            <span className="text-brand-400">Use less.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            HydroGrow designs intelligent vertical hydroponic towers that
            produce up to 10× the yield with 90% less water — year-round,
            anywhere, without a single pesticide.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/products" className="btn-primary">
              Explore Systems
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#how-it-works" className="btn-ghost">
              <PlayCircle className="h-5 w-5" />
              See How It Works
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-brand-400" />
              90% less water
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-brand-400" />
              Zero pesticides
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-brand-400" />
              Carbon-neutral
            </div>
          </div>
        </div>

        {/* Floating visual card */}
        <div className="relative hidden lg:block">
          <div className="glass-card animate-float overflow-hidden rounded-[2rem] p-2">
            <img
              src="https://images.unsplash.com/photo-1585537884612-95e4e0f2be34?auto=format&fit=crop&w=900&q=80"
              alt="Hydroponic tower detail"
              className="h-[520px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="glass-card animate-float-delayed absolute -left-8 top-16 flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/25">
              <Sprout className="h-5 w-5 text-brand-300" />
            </div>
            <div>
              <p className="text-xs text-slate-300">Daily growth</p>
              <p className="text-sm font-bold text-white">+18% yield</p>
            </div>
          </div>

          <div className="glass-card animate-float absolute -right-6 bottom-20 flex items-center gap-3 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/25">
              <Droplets className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-xs text-slate-300">Water saved</p>
              <p className="text-sm font-bold text-white">1,240 L</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}