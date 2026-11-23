# Tibeb Art & Living: Epoxy storefront (Next.js 14 + Tailwind)

## Run
    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Edit
- `lib/site.ts`: Telegram username, phone, WhatsApp, email, Instagram (Telegram and phone are the main contact channels).
- `data/products.ts`: products, sizes, prices (`null` = Request a Quote), images. Put your photos in `public/products/` and use `"/products/name.jpg"`.

## Deploy
Push to GitHub, then import the repo in Vercel (free).
