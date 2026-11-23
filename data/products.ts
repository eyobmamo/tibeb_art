export type Category = "Religious" | "Modern / Abstract";

export interface SizeOption { label: string; price: number }

export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number | null; // "from" price in ETB. null shows "Request a Quote"
  dimensions: string;
  materials: string;
  description: string;
  image: string;
  sizes?: SizeOption[]; // optional full size and price list
  defaultSize?: string;
}

export const categories: ("All" | Category)[] = ["All", "Religious", "Modern / Abstract"];

const cover = (folder: string, slug: string) => `https://mhhomegoods.com/${folder}/${slug}/cover.jpg`;
const RANGE = "Made to order, 60×40 cm up to 3×1.4 m";
const MAT = "Canvas (matte) or epoxy (glossy, glass-like)";

// Titles, descriptions and "from" prices come from mhhomegoods.com.
// Replace image URLs with your own files (e.g. "/products/name.jpg" in /public) any time.
export const products: Product[] = [
  {
    id: "the-last-supper", title: "The Last Supper", category: "Religious", price: 4500, dimensions: RANGE, materials: MAT,
    description: "The disciples gathered around Christ in warm classical tones.",
    image: cover("religious", "the-last-supper"), defaultSize: "150×80 cm",
    sizes: [
      { label: "60×40 cm", price: 5000 }, { label: "70×50 cm", price: 6500 }, { label: "90×60 cm", price: 8500 },
      { label: "120×65 cm", price: 10000 }, { label: "120×80 cm", price: 12000 }, { label: "150×80 cm", price: 16500 },
      { label: "180×90 cm", price: 20000 }, { label: "2×1 m", price: 24000 }, { label: "2.5×1.35 m", price: 30000 }, { label: "3×1.4 m", price: 35000 },
    ],
  },
  { id: "peace-over-the-waves", title: "Peace Over the Waves", category: "Religious", price: 13000, dimensions: "3-piece set", materials: MAT, description: "Christ walking on golden waters toward the disciples' boat. A 3-piece set.", image: cover("religious", "peace-over-the-waves") },
  { id: "golden-halo", title: "Golden Halo", category: "Religious", price: 4500, dimensions: RANGE, materials: MAT, description: "A warm, golden religious piece for living rooms and prayer corners.", image: cover("religious", "golden-halo") },
  { id: "grace", title: "Grace", category: "Religious", price: 4500, dimensions: RANGE, materials: MAT, description: "An old man bowing in prayer over bread and soup.", image: cover("religious", "grace") },
  { id: "golden-crown-of-thorns", title: "Golden Crown of Thorns", category: "Religious", price: 4500, dimensions: RANGE, materials: MAT, description: "Christ's face in thick ivory paint with a crown of gold.", image: cover("religious", "golden-crown-of-thorns") },
  { id: "golgotha", title: "Golgotha", category: "Religious", price: 4500, dimensions: RANGE, materials: MAT, description: "The cross on the hill above the crowd, the dove in amber light.", image: cover("religious", "golgotha") },
  { id: "the-lost-lamb", title: "The Lost Lamb", category: "Religious", price: 4500, dimensions: RANGE, materials: MAT, description: "A lost lamb in the forest as the shepherd comes looking.", image: cover("religious", "the-lost-lamb") },
  { id: "lion-of-judah", title: "Lion of Judah", category: "Religious", price: 4500, dimensions: RANGE, materials: MAT, description: "Christ crowned with thorns beside the Lion of Judah.", image: cover("religious", "lion-of-judah") },
  { id: "golden-blossom-branch", title: "Golden Blossom Branch", category: "Modern / Abstract", price: null, dimensions: RANGE, materials: MAT, description: "A contemporary golden branch for halls, consoles and living rooms.", image: cover("modern-abstract", "golden-blossom-branch") },
  { id: "textured-tide", title: "Textured Tide", category: "Modern / Abstract", price: null, dimensions: RANGE, materials: MAT, description: "Layered, textured movement for reading corners and bedrooms.", image: cover("modern-abstract", "textured-tide") },
];

export const formatPrice = (p: number | null) => (p === null ? "Request a Quote" : `From ETB ${p.toLocaleString("en-US")}`);
