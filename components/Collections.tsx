import { ArrowRight } from "lucide-react";
import ProductImage from "./ProductImage";
import { products } from "@/data/products";

const cards = [
  { title: "Religious", text: "Sacred art for blessed spaces", id: "the-last-supper" },
  { title: "Modern / Abstract", text: "Contemporary designs for modern homes", id: "textured-tide" },
];

export default function Collections() {
  return (
    <section id="collections" className="bg-white px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-earth">Browse by style</p>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl">Shop by collection</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {cards.map((c) => {
            const p = products.find((x) => x.id === c.id)!;
            return (
              <a key={c.title} href="#gallery" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-charcoal">
                  <ProductImage src={p.image} alt={c.title} className="transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div><h3 className="font-serif text-3xl">{c.title}</h3><p className="text-charcoal/65">{c.text}</p></div>
                  <ArrowRight className="text-earth transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
