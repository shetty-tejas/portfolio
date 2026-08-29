import type { Root } from 'mdast';

import { toString } from 'mdast-util-to-string';

const WORDS_PER_MINUTE = 225;

export default () => {
	return function (tree: Root, file: vfile) {
		const plainText = toString(tree);

		file.data.fm = {
			...file.data.fm,
			readingTime: calculateReadingTime(plainText)
		};
	};
};

const calculateReadingTime = (text: string): number => {
	const words = text
		.replace(/---[\s\S]*?---/, '')
		.trim()
		.split(/\s+/).length;

	return Math.ceil(words / WORDS_PER_MINUTE);
};

interface vfile {
	data: {
		fm?: {
			readingTime?: number;
		};
		[key: string]: unknown;
	};
}
