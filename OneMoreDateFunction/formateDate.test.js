const { formatDate } = require("./formatDate");

describe("A. One More Date Function", () => {
  const testCases = [
    {
      input: "1/1",
      output: {
        DM: "1/1",
        YYYYMMDD: "2001-01-01",
        dayOfWeek: "Monday",
        fullMonth: "January",
        ISO: "2001-01-01T06:00:00.000Z",
      },
    },
    {
      input: "1/1/2023",
      output: {
        DM: "1/1",
        YYYYMMDD: "2023-01-01",
        dayOfWeek: "Sunday",
        fullMonth: "January",
        ISO: "2023-01-01T06:00:00.000Z",
      },
    },
    {
      input: "January 1, 2023",
      output: {
        DM: "1/1",
        YYYYMMDD: "2023-01-01",
        dayOfWeek: "Sunday",
        fullMonth: "January",
        ISO: "2023-01-01T06:00:00.000Z",
      },
    },
    {
      input: "Jan 1, 2023",
      output: {
        DM: "1/1",
        YYYYMMDD: "2023-01-01",
        dayOfWeek: "Sunday",
        fullMonth: "January",
        ISO: "2023-01-01T06:00:00.000Z",
      },
    },
    {
      input: "2/29/2024",
      output: {
        DM: "29/2",
        YYYYMMDD: "2024-02-29",
        dayOfWeek: "Thursday",
        fullMonth: "February",
        ISO: "2024-02-29T06:00:00.000Z",
      },
    },
    {
      input: "12/31/2023",
      output: {
        DM: "31/12",
        ISO: "2023-12-31T06:00:00.000Z",
        YYYYMMDD: "2023-12-31",
        dayOfWeek: "Sunday",
        fullMonth: "December",
      },
    },
    {
      input: "12/31/2023",
      output: {
        DM: "31/12",
        ISO: "2023-12-31T06:00:00.000Z",
        YYYYMMDD: "2023-12-31",
        dayOfWeek: "Sunday",
        fullMonth: "December",
      },
    },
    {
      input: "12-31-2023",
      output: {
        DM: "31/12",
        ISO: "2023-12-31T06:00:00.000Z",
        YYYYMMDD: "2023-12-31",
        dayOfWeek: "Sunday",
        fullMonth: "December",
      },
    },
  ];

  describe("Accepts the widest range of possible date-string inputs", () => {
    for (let i = 0; i < testCases.length; ++i) {
      const { input, output } = testCases[i];
      it("should return an object by default that contains all 5 date string formats", () => {
        expect(formatDate(input)).toEqual(output);
      });

      it("should return an object by default that contains all 5 date string formats when passing an empty string as second arg", () => {
        expect(formatDate(input, "")).toEqual(output);
      });

      it("should convert each date string to ISO format when passing 'ISO' as second arg", () => {
        expect(formatDate(input, "ISO")).toEqual(output["ISO"]);
      });

      it("should convert each date string to YYYY-MM-DD format when passing 'YYYYMMDD' as second arg", () => {
        expect(formatDate(input, "YYYYMMDD")).toEqual(output["YYYYMMDD"]);
      });

      it("should convert each date string to D/M format when passing 'DM' as second arg", () => {
        expect(formatDate(input, "DM")).toEqual(output["DM"]);
      });

      it("should convert each date string to the day of the week when passing 'dayOfWeek' as second arg", () => {
        expect(formatDate(input, "dayOfWeek")).toEqual(output["dayOfWeek"]);
      });

      it("should convert each date string to the full when passing 'fullMonth' as second arg", () => {
        expect(formatDate(input, "fullMonth")).toEqual(output["fullMonth"]);
      });
    }
  });

  describe("Gracefully handles a non-string input", () => {
    it("should throw a TypeError given a non-string input", () => {
      expect(() => formatDate(2023)).toThrow(TypeError);
      expect(() => formatDate(2023)).toThrow("Invalid Date String");
    });

    it("should throw a TypeError given an empty input", () => {
      expect(() => formatDate()).toThrow(TypeError);
      expect(() => formatDate()).toThrow("Invalid Date String");
    });
  });
});
