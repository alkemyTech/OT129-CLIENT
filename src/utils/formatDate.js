export const formatDate = (date) => {
  let newDate = new Date(date).toISOString().split("T")[0];

  return newDate;
};
export const formatDateWithTime = (date) => {
  const dateString =
    ("0" + date.getUTCDate()).slice(-2) +
    "-" +
    ("0" + (date.getUTCMonth() + 1)).slice(-2) +
    "-" +
    date.getUTCFullYear() +
    " " +
    ("0" + date.getUTCHours()).slice(-2) +
    ":" +
    ("0" + date.getUTCMinutes()).slice(-2) +
    "hs";

  return dateString;
};
