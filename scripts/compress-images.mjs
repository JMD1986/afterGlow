import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, basename } from "path";

const IMG_DIR = "src/assets/images";
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 80;

const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function compressImages() {
  const files = await readdir(IMG_DIR);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (!imageExts.has(ext)) continue;

    const inputPath = join(IMG_DIR, file);
    const beforeSize = (await stat(inputPath)).size;
    totalBefore += beforeSize;

    const nameNoExt = basename(file, extname(file));
    const outputName = `${nameNoExt}.webp`;
    const outputPath = join(IMG_DIR, outputName);

    // Skip if already webp and small enough
    if (ext === ".webp" && beforeSize < 200 * 1024) {
      totalAfter += beforeSize;
      console.log(`SKIP ${file} (already small webp)`);
      continue;
    }

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      let pipeline = image;
      if (metadata.width && metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH);
      }

      await pipeline.webp({ quality: WEBP_QUALITY }).toFile(outputPath);

      const afterSize = (await stat(outputPath)).size;
      totalAfter += afterSize;

      const saved = ((1 - afterSize / beforeSize) * 100).toFixed(1);
      console.log(
        `${file} -> ${outputName}  ${(beforeSize / 1024).toFixed(0)}KB -> ${(afterSize / 1024).toFixed(0)}KB  (${saved}% saved)`,
      );
    } catch (err) {
      console.error(`ERROR ${file}: ${err.message}`);
      totalAfter += beforeSize;
    }
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`,
  );
  console.log(`Saved: ${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`);
}

compressImages();
