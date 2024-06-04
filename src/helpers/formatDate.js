export function formatDateString(dateString) {
  if (dateString === undefined) {
    return;
  }
  const date = new Date(dateString);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  const parts = formattedDate.split("/");
  const dateWithDots = `${parts[0]}.${parts[1]}.${parts[2]}`;

  return dateWithDots;
}
