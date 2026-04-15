import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "promo-screenshots");

const pages = [
  { name: "brianClown", url: "/afterGlow/#/promo/brianClown" },
  { name: "jaykWilson", url: "/afterGlow/#/promo/jaykWilson" },
];

const BASE = process.argv[2] || "http://localhost:5173";
const SECTION_WIDTH = 1080;
const SECTION_HEIGHT = 1350;

async function run() {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({
    width: SECTION_WIDTH + 32,
    height: SECTION_HEIGHT,
    deviceScaleFactor: 1,
  });

  for (const { name, url } of pages) {
    console.log(`\nCapturing ${name}...`);
    await page.goto(`${BASE}${url}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for images to load
    await page.evaluate(() =>
      Promise.all(
        Array.from(document.querySelectorAll("img")).map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((res) => {
                img.onload = res;
                img.onerror = res;
              }),
        ),
      ),
    );

    const sectionEls = await page.$$(".promo-section");

    if (sectionEls.length === 0) {
      console.log(`  No sections found for ${name}, skipping.`);
      continue;
    }

    console.log(`  Found ${sectionEls.length} sections`);

    for (let i = 0; i < sectionEls.length; i++) {
      const el = sectionEls[i];
      const box = await el.boundingBox();
      if (!box) continue;

      // Scroll to section and screenshot at exact 1080x1350
      await el.evaluate((e) => e.scrollIntoView({ block: "center" }));
      await new Promise((r) => setTimeout(r, 500));

      const filePath = path.join(outputDir, `${name}-section-${i + 1}.png`);
      await el.screenshot({ path: filePath, type: "png" });
      console.log(`  Saved ${filePath}`);
    }
  }

  await browser.close();
  console.log(`\nDone! Screenshots saved to ${outputDir}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
