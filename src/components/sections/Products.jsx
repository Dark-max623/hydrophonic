import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star } from 'lucide-react';
import { products } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';

export default function Products() {
  return (
    <section id="products" className="bg-slate-50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title="Systems built for every grower"
          description="From countertop towers to enterprise-grade installations — pick the system that matches your space and ambition."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/40" />

                {/* Tag — flat color */}
                <span
                  className={`absolute left-4 top-4 rounded-full ${product.accent} px-3 py-1 text-xs font-semibold text-white shadow-md`}
                >
                  {product.tag}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-semibold text-slate-800">
                    4.9
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {product.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
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
                    <p className="text-2xl font-extrabold text-slate-900">
                      {product.price}
                    </p>
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

        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}