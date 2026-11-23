import { Send, Phone, MapPin } from "lucide-react";
import ProductImage from "./ProductImage";
import { site, telUrl, telegramUrl } from "@/lib/site";

const HERO = "https://mhhomegoods.com/hero-last-supper-living-room.jpg";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-ivory px-5 pb-6 pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="animate-rise">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-earth">Custom wall art studio</p>
          <h1 className="font-serif text-5xl font-medium leading-[1.02] sm:text-6xl">Wall art that makes a space feel like yours.</h1>
          <p className="mt-5 max-w-md text-lg text-charcoal/75">Canvas and epoxy designs for homes and offices, made to order in Addis Ababa and delivered across Ethiopia.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gallery" className="rounded-full bg-charcoal px-7 py-3 font-medium text-ivory hover:bg-earth">Explore the collection</a>
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2AABEE] px-7 py-3 font-medium text-white hover:bg-[#1f95d1]"><Send size={16} /> Chat on Telegram</a>
          </div>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 rounded-3xl border border-charcoal/15 p-4 hover:border-gold">
              <MapPin className="shrink-0 text-earth" size={18} />
              <span><b className="block font-medium">Visit our studio</b>{site.address}<br />{site.hours}</span>
            </a>
            <a href={telUrl} className="flex gap-3 rounded-3xl border border-charcoal/15 p-4 hover:border-gold">
              <Phone className="shrink-0 text-earth" size={18} />
              <span><b className="block font-medium">Call us</b>{site.phone}</span>
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md animate-rise [animation-delay:.2s]">
          <div className="absolute -right-4 top-6 h-full w-full rounded-t-[999px] rounded-b-[3rem] border border-gold" aria-hidden="true" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[3rem] bg-charcoal">
            <ProductImage src={HERO} alt="The Last Supper canvas above a cream sofa in a bright living room" priority sizes="(min-width:768px) 450px, 100vw" />
          </div>
          <a href="#gallery" className="absolute -bottom-3 left-4 rounded-full bg-ivory px-4 py-2 text-xs shadow-lg">Shown: The Last Supper, canvas</a>
        </div>
      </div>
    </section>
  );
}
