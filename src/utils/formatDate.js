export const formatDate = (date) => {
  let newDate = new Date(date).toISOString().split("T")[0];

  return newDate;
};
