"use client";
import { useState } from "react";
import { Ruler, Hammer, Truck, Send } from "lucide-react";
import ContactActions from "./ContactActions";
import { telegramWith } from "@/lib/site";

const steps = [
  { icon: Ruler, title: "1. Choose Size & Colors", text: "Tell us the space, the size and the colours you love." },
  { icon: Hammer, title: "2. Approval & Pouring", text: "You approve the design direction, then we pour and finish by hand." },
  { icon: Truck, title: "3. Delivery", text: "Careful delivery and, where agreed, installation." },
];

const empty = { name: "", contact: "", size: "", colors: "", notes: "" };

export default function Commission() {
  const [f, setF] = useState(empty);
  const [message, setMessage] = useState("");
  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const m = `Custom piece request\nName: ${f.name}\nContact: ${f.contact}\nSize: ${f.size || "-"}\nColors: ${f.colors || "-"}\nNotes: ${f.notes || "-"}`;
    setMessage(m);
    window.open(telegramWith(m), "_blank", "noopener,noreferrer");
  }

  const input = "w-full border border-charcoal/20 bg-white px-3 py-3 text-sm";
  return (
    <section id="custom" className="bg-charcoal px-5 py-20 text-ivory md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl">Your Vision. Our Craftsmanship.</h2>
        <p className="mt-3 max-w-xl text-ivory/70">Commission a one-of-a-kind epoxy piece made for your home, office or a gift.</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ol className="grid gap-6">
            {steps.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4 border-t border-gold/40 pt-5">
                <Icon className="mt-1 shrink-0 text-gold" />
                <div><h3 className="font-serif text-2xl">{title}</h3><p className="text-ivory/70">{text}</p></div>
              </li>
            ))}
          </ol>
          <form onSubmit={submit} className="grid gap-4 rounded-[2rem] bg-ivory p-6 text-charcoal">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1 text-sm">Name<input required className={input} value={f.name} onChange={set("name")} /></label>
              <label className="grid gap-1 text-sm">Telegram or phone<input required className={input} value={f.contact} onChange={set("contact")} placeholder="@username or +251..." /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1 text-sm">Size<input className={input} value={f.size} onChange={set("size")} placeholder="e.g. 120 × 80 cm" /></label>
              <label className="grid gap-1 text-sm">Color palette<input className={input} value={f.colors} onChange={set("colors")} placeholder="e.g. deep blue, gold" /></label>
            </div>
            <label className="grid gap-1 text-sm">Notes<textarea rows={4} className={input} value={f.notes} onChange={set("notes")} /></label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2AABEE] px-6 py-3 font-medium text-white hover:bg-[#1f95d1]"><Send size={16} /> Request Custom Design on Telegram</button>
            {message && (
              <div className="border-t border-charcoal/10 pt-4">
                <p className="mb-3 text-sm text-charcoal/70">Telegram opened with your request. Or choose another way:</p>
                <ContactActions message={message} subject="Custom piece request" />
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
