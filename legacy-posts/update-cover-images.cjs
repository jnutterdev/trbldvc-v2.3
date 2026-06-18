const fs = require('fs');
const path = require('path');

const posts = require('./all_posts.json');
const formattedDir = path.join(__dirname, 'formatted');
const imagesDir = path.join(__dirname, '../public/images/posts');

posts.forEach((post) => {
  const mdPath = path.join(formattedDir, `${post.slug}.md`);
  if (!fs.existsSync(mdPath)) return;

  // Find the downloaded image file (could be .jpg or .png)
  const exts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const localFile = exts.map(e => `${post.slug}${e}`).find(f => fs.existsSync(path.join(imagesDir, f)));

  if (!localFile) {
    console.log(`  skip  ${post.slug} — no local image found`);
    return;
  }

  const localPath = `/images/posts/${localFile}`;
  let content = fs.readFileSync(mdPath, 'utf8');
  const updated = content.replace(/^cover_image:.*$/m, `cover_image: '${localPath}'`);

  if (updated === content) {
    console.log(`  skip  ${post.slug}.md — no change`);
    return;
  }

  fs.writeFileSync(mdPath, updated, 'utf8');
  console.log(`  ok    ${post.slug}.md → ${localPath}`);
});

console.log('\nDone.');
