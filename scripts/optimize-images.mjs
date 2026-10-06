// One-off script: optimize the real Google Maps photo for web usage.
// Run: node scripts/optimize-images.mjs
import sharp from "sharp";

const src = "public/images/barbershop-nusantara-interior.jpg";

// Crop watermark kamera di pojok bawah foto asli
const cleanBase = () =>
  sharp(src).extract({
    left: 0,
    top: 0,
    width: 1200,
    height: 1600 - 140,
  });

async function run() {
  // Hero (portrait)
  await cleanBase()
    .resize(1080, null, { withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile("public/images/hero.jpg");

  // Tentang (4:3)
  await cleanBase()
    .resize(900, 675, { fit: "cover", position: "attention" })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile("public/images/tentang.jpg");

  // OG image (1200x630)
  await cleanBase()
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile("public/images/og.jpg");

  console.log("done");
}

run();
