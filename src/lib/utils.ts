import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, weekday: boolean = true): string {
	const date = new Date(dateString);

	return date.toLocaleDateString('en-IN', {
		weekday: weekday ? 'long' : undefined,
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
