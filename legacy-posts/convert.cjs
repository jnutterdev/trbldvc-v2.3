const fs = require('fs');
const path = require('path');

const posts = require('./all_posts.json');
const outDir = path.join(__dirname, 'formatted');

function stripHtml(html) {
  if (!html) return '';

  return html
    // Convert <a href="...">text</a> to markdown links
    .replace(/<a\s+href="([^"]+)"[^>]*>([^<]*)<\/a>/gi, '[$2]($1)')
    // Convert <br/>, <br />, <br> to newlines
    .replace(/<br\s*\/?>/gi, '\n')
    // Remove <p> open tags
    .replace(/<p[^>]*>/gi, '')
    // Convert </p> to double newline
    .replace(/<\/p>/gi, '\n\n')
    // Strip remaining tags
    .replace(/<[^>]+>/g, '')
    // Decode HTML entities
    .replace(/&ldquo;/g, '\u201c')
    .replace(/&rdquo;/g, '\u201d')
    .replace(/&lsquo;/g, '\u2018')
    .replace(/&rsquo;/g, '\u2019')
    .replace(/&mdash;/g, '\u2014')
    .replace(/&ndash;/g, '\u2013')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    // Clean up excess blank lines
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function formatDate(dateStr) {
  return new Date(dateStr).toISOString();
}

function yamlString(val) {
  // Wrap in single quotes if it contains special chars, escaping any existing single quotes
  if (typeof val !== 'string') return val;
  if (val.includes(':') || val.includes('#') || val.includes("'") || val.match(/^[{[\|>&*!%@`,]/)) {
    return `'${val.replace(/'/g, "''")}'`;
  }
  return val;
}

posts.forEach((post) => {
  const slug = post.slug;
  const title = post.title || '';
  const coverImage = post.link_image || '';
  const listenUrl = post.url || '';
  const tags = Array.isArray(post.tags) ? [...post.tags, 'music'] : ['music'];
  const publishedDate = post.date ? formatDate(post.date) : '';
  const body = stripHtml(post.description);

  const tagLines = tags.map(t => `  - ${t}`).join('\n');

  const frontmatter = `---
title: ${yamlString(title)}
cover_image: ${yamlString(coverImage)}
listen_url: ${yamlString(listenUrl)}
tags:
${tagLines}
published_date: ${publishedDate}
---`;

  const content = body ? `${frontmatter}\n\n${body}\n` : `${frontmatter}\n`;

  const filePath = path.join(outDir, `${slug}.md`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Written: ${slug}.md`);
});

console.log(`\nDone. ${posts.length} files written to legacy-posts/formatted/`);
