import { Send, Phone } from "lucide-react";
import { telUrl, telegramUrl } from "@/lib/site";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2">
      <a href={telUrl} aria-label="Call us" className="grid h-12 w-12 place-items-center rounded-full bg-charcoal text-ivory shadow-lg"><Phone size={20} /></a>
      <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-[#2AABEE] px-5 py-3 font-medium text-white shadow-lg"><Send size={18} /> Order on Telegram</a>
    </div>
  );
}
