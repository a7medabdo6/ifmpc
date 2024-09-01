import { format, parseISO } from "date-fns"; // Import parseISO

export const formatDate = (dateString: string) => {
  try {
    const date = parseISO(dateString); // Use parseISO to handle ISO format
    return format(date, "dd MMMM yyyy"); // Format date to "25 June 2024"
  } catch (error) {
    console.error("Invalid date:", dateString, error);
    return "Invalid date"; // Return a fallback if the date is invalid
  }
};
