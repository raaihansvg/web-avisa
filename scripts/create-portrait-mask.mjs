// Non-generative background mask. The source JPEG is never written or recompressed.
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const source = fileURLToPath(new URL("../public/images/avisa-original.jpeg", import.meta.url));
const output = fileURLToPath(new URL("../public/images/avisa-background-mask.png", import.meta.url));
const { data, info } = await sharp(source).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const mask = Buffer.alloc(width * height, 255);
const queue = new Uint32Array(width * height);
let head = 0;
let tail = 0;
function enqueue(index) {
  if (!mask[index]) return;
  const pixel = index * channels;
  // Only near-white pixels connected to the exterior are background.
  // Skin, dark clothing, ivory pedestal and sneakers stay fully opaque.
  if (data[pixel] < 248 || data[pixel + 1] < 248 || data[pixel + 2] < 248) return;
  mask[index] = 0;
  queue[tail++] = index;
}
for (let x = 0; x < width; x++) { enqueue(x); enqueue((height - 1) * width + x); }
for (let y = 0; y < height; y++) { enqueue(y * width); enqueue(y * width + width - 1); }
while (head < tail) {
  const index = queue[head++];
  const x = index % width;
  if (x > 0) enqueue(index - 1);
  if (x < width - 1) enqueue(index + 1);
  if (index >= width) enqueue(index - width);
  if (index < width * (height - 1)) enqueue(index + width);
}
await sharp(mask, { raw: { width, height, channels: 1 } }).png().toFile(output);
console.log(`Created ${width}×${height} mask; removed ${tail} exterior pixels. Original JPEG unchanged.`);
