"use client";
import { useState } from "react";
import { Menu, X, Phone, Send } from "lucide-react";
import { site, telUrl, telegramUrl } from "@/lib/site";

const links = [
  { href: "#collections", label: "Collections" },
  { href: "#videos", label: "Videos" },
  { href: "#gallery", label: "Gallery" },
  { href: "#custom", label: "Custom Orders" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-charcoal/10 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
        <a href="#top" className="mr-auto font-serif text-xl font-semibold tracking-wide">{site.name.toUpperCase()}</a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-charcoal/70 hover:text-charcoal">{l.label}</a>
          ))}
        </div>
        <a href={telUrl} aria-label="Call us" className="hidden p-2 hover:text-earth sm:block"><Phone size={18} /></a>
        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium hover:bg-charcoal hover:text-ivory sm:inline-flex">
          <Send size={14} /> Order Now
        </a>
        <button className="p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="animate-fade border-t border-charcoal/10 bg-ivory px-5 pb-5 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-charcoal/10 py-3">{l.label}</a>
          ))}
          <div className="mt-4 flex gap-3">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#2AABEE] py-3 text-white"><Send size={16} /> Telegram</a>
            <a href={telUrl} className="flex flex-1 items-center justify-center gap-2 rounded-full border border-charcoal py-3"><Phone size={16} /> Call</a>
          </div>
        </div>
      )}
    </header>
  );
}
