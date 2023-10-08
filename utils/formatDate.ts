export function formatTimestamp(timestamp: number): string {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const date = new Date(timestamp * 1000);

    const month = months[date.getMonth()];
    const year = date.getFullYear() % 100;

    return `${month} '${year}`;
}
export function formatToDayMonth(timestamp: number): string {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long'  };
    return new Date(timestamp).toLocaleDateString('en-US', options);
}