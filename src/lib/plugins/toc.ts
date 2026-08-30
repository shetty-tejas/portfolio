import type { Transformer } from 'unified';
import type { Root, Heading, Html, List } from 'mdast';
import remarkToc, { type Options as RemarkTocOptions } from 'remark-toc';
import visit from 'unist-util-visit';

interface TocOptions extends RemarkTocOptions {
	heading?: string;
	summaryText?: string;
}

export default function (options: TocOptions = {}): Transformer<Root> {
	const { summaryText = 'Table of Contents', ...remarkTocOptions } = options;
	const transformer = remarkToc(remarkTocOptions);

	return function (tree) {
		if (typeof transformer === 'function') {
			transformer(tree);
		}

		const regex = new RegExp(`^(${options.heading})$`, 'i');
		visit(tree, 'heading', (node: Heading, index, parent) => {
			if (!parent || typeof index !== 'number') return;

			const firstChild = node.children[0];
			if (firstChild?.type === 'text' && regex.test(firstChild.value.trim())) {
				const nextNode = parent.children[index + 1];

				if (nextNode && nextNode.type === 'list') {
					const openTag: Html = {
						type: 'html',
						value: `<aside><details><summary>${summaryText}</summary>`
					};
					const closeTag: Html = {
						type: 'html',
						value: '</details></aside>'
					};

					parent.children.splice(index, 2, openTag, nextNode, closeTag);
				}
			}
		});
	};
}
