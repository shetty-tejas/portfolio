import type { Root } from 'mdast';

import { toString } from 'mdast-util-to-string';

export default () => {
	return function (tree: Root, file: vfile) {
		file.data.fm = {
			...file.data.fm,
			excerpt: toString(tree).slice(0, 200) + '...'
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
