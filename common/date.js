import moment from "moment";

export const showDate = (date) => {
  return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
};

export const dateTimePickerDate = (date) => {
  return moment(date).format("YYYY-MM-DD");
};
