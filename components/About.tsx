import { Hand, Sun, Gem } from "lucide-react";

const points = [
  { icon: Hand, title: "Handmade", text: "Every piece is poured, cured and finished by hand, so no two are the same." },
  { icon: Sun, title: "UV-resistant resin", text: "We use UV-resistant resin to help colours stay vivid. Confirm the exact product spec before publishing." },
  { icon: Gem, title: "Made to last", text: "Glass-smooth finishes designed to be lived with and passed on." },
];

export default function About() {
  return (
    <section id="about" className="bg-ivory px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl">About the Craft</h2>
        <p className="mt-4 max-w-2xl text-lg text-charcoal/75">
          Our studio in Addis Ababa makes epoxy art and home decor that blends contemporary resin techniques with Ethiopian creativity and warmth. Add your own story here.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t-2 border-gold pt-5">
              <Icon className="text-earth" />
              <h3 className="mt-3 font-serif text-2xl">{title}</h3>
              <p className="mt-1 text-charcoal/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
