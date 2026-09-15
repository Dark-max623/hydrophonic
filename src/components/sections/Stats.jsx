import { stats } from '../../data/stats';
import StatCard from '../ui/StatCard';

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />

      <div className="container-x relative">
        <div className="grid gap-10 rounded-3xl border border-white/5 bg-white/[0.02] p-10 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}