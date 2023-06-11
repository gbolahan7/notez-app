export function truncateText(text: string, num: number): string {
    if (text.length <= num) return text;

    return text.substring(0, num) + "..."
}

export function formatDateTime(date: Date | number | undefined): string {
    const formattedDate = new Intl.DateTimeFormat("en-Gb",
        { day: "numeric", 
        month: "long", year: "numeric", weekday: "short" }).format(
        date
    );

    return formattedDate
}