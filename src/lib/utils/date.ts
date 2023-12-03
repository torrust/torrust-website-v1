import dateFormat from 'dateformat';

export function formatDate(date: string): string {
	return dateFormat(date, 'UTC:dd/mm/yyyy');
}

export function formatTime(date: string): string {
	return dateFormat(date, 'UTC:HH:MM:ss');
}
