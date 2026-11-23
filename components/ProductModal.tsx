"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import ProductImage from "./ProductImage";
import ContactActions from "./ContactActions";
import { formatPrice, type Product } from "@/data/products";

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [material, setMaterial] = useState<"Canvas" | "Epoxy">("Canvas");
  const [size, setSize] = useState(product.defaultSize ?? product.sizes?.[0]?.label ?? "");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const picked = product.sizes?.find((s) => s.label === size);
  const priceText = picked ? `ETB ${picked.price.toLocaleString("en-US")}` : formatPrice(product.price);
  const message = [
    "Hello! I'd like to order:",
    `Design: ${product.title}`,
    size ? `Size: ${size}` : "Size: (please advise)",
    `Material: ${material}`,
    `Price: ${priceText}`,
    `Delivery location: ${location}`,
    "Please send me the deposit payment details.",
  ].join("\n");

  const chip = (on: boolean) => `rounded-full border px-4 py-2 text-sm transition-colors ${on ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/25 hover:border-charcoal"}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-charcoal/80 sm:items-center sm:p-6 animate-fade" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={product.title} onClick={(e) => e.stopPropagation()}
        className="relative max-h-[94svh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-ivory sm:rounded-[2rem] md:grid md:grid-cols-2">
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-ivory p-2 shadow"><X size={20} /></button>
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[540px]">
          <ProductImage src={product.image} alt={product.title} sizes="(min-width:768px) 450px, 100vw" />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-earth">{product.category}</p>
          <h3 className="mt-1 font-serif text-3xl">{product.title}</h3>
          <p className="mt-2 text-xl font-medium text-earth">{priceText}</p>
          <p className="mt-3 text-charcoal/80">{product.description}</p>

          <p className="mt-5 text-sm font-medium">Material</p>
          <div className="mt-2 flex gap-2">
            {(["Canvas", "Epoxy"] as const).map((m) => (
              <button key={m} aria-pressed={material === m} onClick={() => setMaterial(m)} className={chip(material === m)}>{m}</button>
            ))}
          </div>
          <p className="mt-1 text-xs text-charcoal/60">Canvas: matte, no glare. Epoxy: glossy, glass-like.</p>

          {product.sizes && (
            <>
              <p className="mt-5 text-sm font-medium">Size</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button key={s.label} aria-pressed={size === s.label} onClick={() => setSize(s.label)} className={chip(size === s.label)}>{s.label}</button>
                ))}
              </div>
            </>
          )}
          {!product.sizes && <p className="mt-5 text-sm text-charcoal/70">Sizes: {product.dimensions}. Tell us the size you need on Telegram.</p>}

          <label className="mt-5 grid gap-1 text-sm">Delivery location (optional)
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g. Bole, Addis Ababa" className="rounded-full border border-charcoal/20 bg-white px-4 py-3" />
          </label>
          <p className="mt-4 text-xs text-charcoal/60">50% deposit by Telebirr or CBE, the rest on delivery. Delivered in 5–7 working days in Addis Ababa. Delivery fee not included. Final price confirmed on Telegram.</p>
          <div className="mt-5"><ContactActions message={message} subject={`Order: ${product.title}`} /></div>
        </div>
      </div>
    </div>
  );
}
