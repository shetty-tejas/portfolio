import { get } from '$lib/content/loader';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = ({ url }) => {
	const writings = get('writings');
	const origin = url.origin;

	const items = writings
		.map((post) => {
			const link = `${origin}/writings/${post.slug}/`;
			return [
				'<item>',
				`\t<title>${esc(post.metadata.title)}</title>`,
				`\t<link>${link}</link>`,
				`\t<description>${esc(post.metadata.description)}</description>`,
				`\t<pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>`,
				...(post.metadata.tags ?? []).map((tag) => `\t<category>${esc(tag)}</category>`),
				'</item>'
			].join('\n');
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>Tejas Shetty</title>
		<link>${origin}/writings/</link>
		<description>Software engineer by trade, curious by nature. Writing about building robust systems and navigating the messy process of personal growth.</description>
		<lastBuildDate>${writings[0] ? new Date(writings[0].metadata.publishedAt).toUTCString() : new Date().toUTCString()}</lastBuildDate>
		<atom:link href="${origin}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
	});
};

function esc(value: string): string {
	return value.replaceAll('&', '&amp;');
}
