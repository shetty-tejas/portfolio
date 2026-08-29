import type { Root } from 'mdast';

import { toString } from 'mdast-util-to-string';

export default () => {
	return function (tree: Root, file: vfile) {
		const yamlExcludedTree = tree.children.filter((n) => n.type !== 'yaml');

		let excerpt = yamlExcludedTree
			.filter((n) => n.type === 'paragraph')
			.map((p) => toString(p))
			.join(' ')
			.trim();

		if (!excerpt) {
			excerpt = toString({ ...tree, children: yamlExcludedTree })
				.replace(/^Table of Contents\s*/i, '')
				.trim();
		}

		if (excerpt.length > 200) excerpt = excerpt.slice(0, 200) + '…';

		file.data.fm = {
			...file.data.fm,
			excerpt
		};
	};
};

interface vfile {
	path: string;

	data: {
		fm?: {
			excerpt?: string;
		};
		[key: string]: unknown;
	};
}
