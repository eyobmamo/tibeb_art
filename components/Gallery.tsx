"use client";
import { useMemo, useState } from "react";
import ProductImage from "./ProductImage";
import ProductModal from "./ProductModal";
import { categories, formatPrice, products, type Product } from "@/data/products";

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Product | null>(null);
  const shown = useMemo(() => (active === "All" ? products : products.filter((p) => p.category === active)), [active]);

  return (
    <section id="gallery" className="bg-white px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-earth">Top picks</p>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl">Wall art for your space</h2>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button key={c} aria-pressed={active === c} onClick={() => setActive(c)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors ${active === c ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 hover:border-charcoal"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.id} className="group">
              <button onClick={() => setSelected(p)} className="block w-full text-left" aria-label={`View ${p.title}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-charcoal/10">
                  <ProductImage src={p.image} alt={p.title} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-center font-serif text-2xl">{p.title}</h3>
                <p className="text-center text-sm text-charcoal/60">{p.category}</p>
                <p className="mt-1 text-center font-medium text-earth">{formatPrice(p.price)}</p>
              </button>
              <div className="mt-3 text-center">
                <button onClick={() => setSelected(p)} className="rounded-full border border-charcoal px-5 py-2 text-sm hover:bg-charcoal hover:text-ivory">View &amp; order</button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
