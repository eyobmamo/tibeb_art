// Contact details taken from mhhomegoods.com. Leave a field "" to hide it on the site.
export const site = {
  name: "Tibeb Art & Living",
  tagline: "Custom epoxy and canvas wall art, made in Addis Ababa",
  telegram: "tibebarts", // without @
  phone: "+251 900000000",
  whatsapp: "", // digits only with country code, e.g. 251941136595
  email: "",
  instagram: "", // without @
  city: "Addis Ababa, Ethiopia",
  address: "tibeb City Mall, 3rd floor, 4 kilo, Addis Ababa",
  hours: "Mon–Sat 9 AM–5 PM · Sunday closed",
  mapsUrl: "https://maps.app.goo.gl/3jb3Krd5foen2ei7",
};

export const telegramUrl = `https://t.me/${site.telegram}`;
export const telegramWith = (msg: string) => `${telegramUrl}?text=${encodeURIComponent(msg)}`;
export const telUrl = `tel:${site.phone.replace(/\s/g, "")}`;
export const instagramUrl = `https://instagram.com/${site.instagram}`;
export const whatsappUrl = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
export const mailUrl = (subject: string, body: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
