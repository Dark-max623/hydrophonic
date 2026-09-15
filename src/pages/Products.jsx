import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Sparkles, Truck, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import SectionHeading from '../components/ui/SectionHeading';
import CTA from '../components/sections/CTA';

const perks = [
  { icon: Truck, title: 'Free Delivery', text: 'On all orders over $500.' },
  { icon: ShieldCheck, title: '2-Year Warranty', text: 'On every HydroGrow system.' },
  { icon: Sparkles, title: 'Free Setup Call', text: '30-min onboarding included.' },
];

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=2000&q=80"
            alt="Hydroponic product range"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-brand-950/70" />
        </div>
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />

        <div className="container-x relative">
          <SectionHeading
            light
            align="left"
            eyebrow="Our Products"
            title="Complete hydroponic systems"
            description="Every HydroGrow product is engineered for reliability, efficiency and long-term yields. Choose the setup that fits your space and scale."
          />
        </div>
      </section>

      {/* Perks strip */}
      <section className="border-b border-slate-100 bg-white py-8">
        <div className="container-x grid gap-6 sm:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50">
                <Icon className="h-5 w-5 text-brand-600" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{title}</p>
                <p className="text-xs text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-slate-50 py-24">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full bg-gradient-to-r ${product.accent} px-3 py-1 text-xs font-semibold text-white shadow-lg`}
                  >
                    {product.tag}
                  </span>
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-slate-800">4.9</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {product.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-50">
                          <Check className="h-3 w-3 text-brand-600" />
                        </span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-xs text-slate-500">Starting at</p>
                      <p className="text-2xl font-extrabold text-slate-900">{product.price}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-600/30"
                    >
                      Enquire
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}