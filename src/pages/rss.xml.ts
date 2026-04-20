import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const reviews = await getCollection('reviews');

  const sorted = reviews.sort((a, b) => {
    const da = a.data.published_date ? new Date(a.data.published_date).getTime() : 0;
    const db = b.data.published_date ? new Date(b.data.published_date).getTime() : 0;
    return db - da;
  });

  return rss({
    title: 'TERRIBLEDevice',
    description: 'cyberpunk in pop culture — reviews of film, fiction, anime, music, and more',
    site: context.site!,
    items: sorted.map(r => ({
      title: r.data.medium === 'music'
        ? `${r.data.title} — ${r.data.artist}`
        : `${r.data.title} — ${r.data.creator ?? ''}`,
      description: r.data.blurb ?? r.data.summary ?? '',
      pubDate: r.data.published_date ? new Date(r.data.published_date) : new Date(),
      link: `/reviews/${r.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
