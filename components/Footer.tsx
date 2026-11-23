import { Send, Phone, Instagram, Mail, MapPin, Clock } from "lucide-react";
import { site, telUrl, telegramUrl, instagramUrl } from "@/lib/site";

export default function Footer() {
  const link = "inline-flex items-start gap-2 hover:text-gold";
  return (
    <footer id="contact" className="bg-charcoal px-5 py-16 text-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl">Ready to transform your space?</h2>
          <p className="mt-3 max-w-md text-ivory/70">Order your custom wall art on Telegram. Fast, personal and hassle-free. Prefer to talk? Call us.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2AABEE] px-7 py-3 font-medium text-white hover:bg-[#1f95d1]"><Send size={16} /> Order on Telegram</a>
            <a href={telUrl} className="inline-flex items-center gap-2 rounded-full border border-ivory/50 px-7 py-3 font-medium hover:bg-ivory hover:text-charcoal"><Phone size={16} /> {site.phone}</a>
          </div>
        </div>
        <ul className="grid gap-3 self-end text-ivory/85">
          <li><a className={link} href={site.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={16} className="mt-1 shrink-0" /> {site.address}. Open in Google Maps</a></li>
          <li className="flex items-start gap-2"><Clock size={16} className="mt-1 shrink-0" /> {site.hours}</li>
          <li><a className={link} href={telegramUrl} target="_blank" rel="noopener noreferrer"><Send size={16} className="mt-1" /> @{site.telegram}</a></li>
          <li><a className={link} href={telUrl}><Phone size={16} className="mt-1" /> {site.phone}</a></li>
          {site.instagram && <li><a className={link} href={instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16} className="mt-1" /> @{site.instagram}</a></li>}
          {site.email && <li><a className={link} href={`mailto:${site.email}`}><Mail size={16} className="mt-1" /> {site.email}</a></li>}
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-6xl border-t border-ivory/15 pt-6 text-sm text-ivory/50">© {new Date().getFullYear()} {site.name}. {site.tagline}.</p>
    </footer>
  );
}
