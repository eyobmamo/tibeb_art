import { Plus } from "lucide-react";

// Answers match mhhomegoods.com. Edit freely.
const faqs = [
  ["How do I order?", "Pick a design, choose canvas or epoxy and a size, then tap the order button. Telegram opens with your order already written. Add your delivery location and send it."],
  ["How do I pay?", "Pay a 50% deposit by Telebirr or CBE and we start making your piece. We send payment details on Telegram. The other 50% is paid on delivery."],
  ["How long does it take?", "Every piece is made to order. In Addis Ababa it is delivered within 5–7 working days after your deposit."],
  ["How much is delivery?", "We deliver with Yango, Feres or Ride. The fee is the app's normal fare from our studio in Megenagna to your location."],
  ["Do you deliver outside Addis Ababa?", "Message us on Telegram with your city and we'll tell you how we can get it to you."],
  ["Canvas or epoxy?", "Canvas has a matte finish with no glare, for a classic look. Epoxy is glossy with a glass-like shine. The biggest sizes are made in canvas only."],
  ["Which size should I choose?", "Above a sofa, choose a piece about two-thirds the width of the sofa. Not sure? Send a photo of your wall on Telegram and we'll suggest a size."],
  ["Can you make a custom size or design?", "Yes. Message us on Telegram with the size or idea you have in mind."],
];

export default function Faq() {
  return (
    <section id="faq" className="bg-white px-5 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-earth">Good to know</p>
        <h2 className="mt-2 font-serif text-4xl md:text-5xl">Questions &amp; answers</h2>
        <div className="mt-8 grid gap-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-3xl border border-charcoal/15 px-6 py-4 open:border-gold open:bg-ivory">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {q}<Plus className="shrink-0 transition-transform group-open:rotate-45" size={18} />
              </summary>
              <p className="mt-3 text-charcoal/75">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
