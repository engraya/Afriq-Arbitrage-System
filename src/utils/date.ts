/**
 * Formats a date string into "DD MMM YY" format.
 * @param dateStr - The date string in ISO format (e.g., "2025-01-08T07:34:32.972Z").
 * @returns The formatted date string (e.g., "08 Jan 25") or an empty string if the input is invalid.
 */
export const formatDate = (dateStr: string): string => {
    if (!dateStr) return "";
  
    const date = new Date(dateStr);
  
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string: ${dateStr}`);
      return "";
    }
  
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    };
  
    // Format the date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  