
export function getFormattedDate(date) {
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getUTCDate().toString().padStart(2, '0');
  // Return formatted date string in MM-DD-YYYY format
  return `${month}-${day}-${year}`;
  }
  
  export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  }