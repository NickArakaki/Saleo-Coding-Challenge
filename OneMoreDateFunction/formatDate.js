/*
## A. One More Date Function

1. Accepts a String
2. Accepts the widest range of possible date-string inputs (i.e. "1/1", "12/31/2010", etc.)
3. Converts the string to 5 distinct formats:
   - ISO
   - YYYY-MM-DD
   - D/M
   - Day of the Week
   - Full Month
4. After calling the function you can use the chosen format throughout the rest of the code
5. "Gracefully" handles a non-string input

*/
const DateError = TypeError("Invalid Date String");

const leftPad = (num) => {
  return `${num < 10 ? "0" : ""}${num}`;
};

const formatDate = (dateString, format = "") => {
  if (typeof dateString !== "string") {
    throw DateError;
  }

  const date = new Date(dateString);
  if (!date) {
    throw DateError;
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthString = leftPad(date.getMonth() + 1);
  const dayString = leftPad(date.getDate());

  res = {
    ISO: date.toISOString(),
    YYYYMMDD: `${date.getFullYear()}-${monthString}-${dayString}`,
    DM: `${date.getDate()}/${date.getMonth() + 1}`,
    dayOfWeek: days[date.getDay()],
    fullMonth: months[date.getMonth()],
  };

  return format in res ? res[format] : res;
};

module.exports.formatDate = formatDate;
