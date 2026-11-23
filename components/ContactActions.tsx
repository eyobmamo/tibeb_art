import { Send, Phone, MessageCircle, Mail } from "lucide-react";
import { mailUrl, site, telUrl, telegramWith, whatsappUrl } from "@/lib/site";

interface Props { message: string; subject?: string }

// Telegram opens with your message already written. Phone is second.
export default function ContactActions({ message, subject = "Order inquiry" }: Props) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={telegramWith(message)} target="_blank" rel="noopener noreferrer" className={`${base} bg-[#2AABEE] text-white hover:bg-[#1f95d1]`}>
        <Send size={16} /> Order on Telegram
      </a>
      <a href={telUrl} className={`${base} border border-charcoal hover:bg-charcoal hover:text-ivory`}>
        <Phone size={16} /> Call us
      </a>
      {site.whatsapp && (
        <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className={`${base} border border-charcoal/30 hover:border-charcoal`}>
          <MessageCircle size={16} /> WhatsApp
        </a>
      )}
      {site.email && (
        <a href={mailUrl(subject, message)} className={`${base} border border-charcoal/30 hover:border-charcoal`}>
          <Mail size={16} /> Email
        </a>
      )}
    </div>
  );
}
