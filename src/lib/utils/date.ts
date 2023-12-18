import dateFormat from 'dateformat';

export function formatDate(date: string): string {
	return dateFormat(date, 'UTC:dd/mm/yyyy');
}

export function formatTime(time: string): string {
	return dateFormat(time, 'UTC:HH:MM:ss');
}
