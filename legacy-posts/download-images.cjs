const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const posts = require('./all_posts.json');
const outDir = path.join(__dirname, '../public/images/posts');

function getExtension(url) {
  const clean = url.split('?')[0];
  const ext = path.extname(clean).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext) ? ext : '.jpg';
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;

    const req = client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });

    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  const toDownload = posts.filter(p => p.link_image);

  console.log(`Downloading ${toDownload.length} images to public/images/posts/\n`);

  for (const post of toDownload) {
    const ext = getExtension(post.link_image);
    const filename = `${post.slug}${ext}`;
    const dest = path.join(outDir, filename);

    if (fs.existsSync(dest)) {
      console.log(`  skip  ${filename} (already exists)`);
      continue;
    }

    try {
      await download(post.link_image, dest);
      console.log(`  ok    ${filename}`);
    } catch (err) {
      console.log(`  fail  ${filename} — ${err.message}`);
    }
  }

  console.log('\nDone.');
}

main();
