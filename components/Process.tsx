const steps = [
  { t: "Choose your design", d: "Browse the collections and find the artwork that speaks to your space." },
  { t: "Select material", d: "Canvas for a classic matte finish. Epoxy for a glossy, glass-like look." },
  { t: "Pick your size", d: "From compact accents to grand statement pieces." },
  { t: "Order via Telegram", d: "Send us a message and we handle the rest, from production to delivery." },
];

export default function Process() {
  return (
    <section className="bg-ivory px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-earth">Simple process</p>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl">How it works</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-[2rem] bg-white p-7 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold font-serif text-2xl">{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl">{s.t}</h3>
              <p className="mt-1 text-charcoal/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
