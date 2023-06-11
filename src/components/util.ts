export function truncateText(text: string, num: number): string {
    if (text.length <= num) return text;

    return text.substring(0, num) + "..."
}

// export function formatDateTime(date: Date | string): string {
//     const d = new Intl.DateTimeFormat("en-Gb", {day: ""})
// }