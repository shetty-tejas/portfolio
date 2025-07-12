import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);

	return date.toLocaleDateString("en-IN", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}
