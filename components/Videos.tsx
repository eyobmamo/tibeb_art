import { Send } from "lucide-react";
import { telegramWith } from "@/lib/site";

// Videos are hosted on mhhomegoods.com. To use your own, put MP4s in /public/videos
// and change src to "/videos/your-file.mp4".
const videos = [
  { title: "Golden Halo", src: "https://mhhomegoods.com/videos/golden-halo.mp4" },
  { title: "City in Gold", src: "https://mhhomegoods.com/videos/city-in-gold.mp4" },
  { title: "Light of the Cross", src: "https://mhhomegoods.com/videos/light-of-the-cross.mp4" },
];

export default function Videos() {
  return (
    <section id="videos" className="bg-charcoal px-5 py-16 text-ivory md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-gold">From our studio</p>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl">Watch us hang them</h2>
        <p className="mt-3 max-w-xl text-ivory/70">Real pieces on real walls. Tap play to see the finish and the scale.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {videos.map((v) => (
            <figure key={v.title} className="overflow-hidden rounded-[2rem] bg-ivory/5 ring-1 ring-gold/30">
              <video src={v.src} controls playsInline preload="metadata" className="aspect-[3/4] w-full bg-black object-cover" aria-label={v.title} />
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <h3 className="font-serif text-xl">{v.title}</h3>
                <a href={telegramWith(`Hello! I'd like to order: ${v.title}`)} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-charcoal hover:bg-ivory">
                  <Send size={14} /> Order
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
