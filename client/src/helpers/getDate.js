import moment from "moment";

export const getDate = (timestamp) => {
  const updatedFormat = "MMMM D, YYYY";
  return moment(timestamp).format(updatedFormat);
};
