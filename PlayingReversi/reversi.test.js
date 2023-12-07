const { reversi } = require("./reversi");

describe("B. Playing Reversi: Accepts a JavaScript Object", () => {
  it("should handle empty object", () => {
    expect(reversi({})).toEqual({});
  });

  it("should reverse keys and values in the input object", () => {
    expect(reversi({ a: 1, b: 2, c: 3 })).toEqual({
      1: ["a"],
      2: ["b"],
      3: ["c"],
    });
  });

  it("should handle input with multiple keys mapping to the same value", () => {
    expect(reversi({ a: 1, b: 2, c: 1, d: 3, e: 2 })).toEqual({
      1: ["a", "c"],
      2: ["b", "e"],
      3: ["d"],
    });
  });

  it("should handle input with different types of values (string, number, boolean)", () => {
    const input = { a: 1, b: "hello", c: true, d: "world", e: false };
    const result = reversi(input);
    expect(result).toEqual({
      1: ["a"],
      hello: ["b"],
      true: ["c"],
      world: ["d"],
      false: ["e"],
    });
  });

  it("should reverse the key/value pairs in an object and sort the values", () => {
    const res = reversi({
      John: "Engineer",
      Alice: "Engineer",
      Sam: "Accountant",
      Leah: "Baker",
    });
    expect(res["Engineer"]).toEqual(["Alice", "John"]);
    expect(res["Accountant"]).toEqual(["Sam"]);
    expect(res["Baker"]).toEqual(["Leah"]);
  });

  it("should handle objects with the same values", () => {
    const res = reversi({
      Bob: "Engineer",
      Alice: "Engineer",
      Charlie: "Engineer",
      Dave: "Engineer",
      Edward: "Accountant",
      Sam: "Accountant",
      Leah: "Baker",
    });

    expect(res["Engineer"]).toEqual(["Alice", "Bob", "Charlie", "Dave"]);
    expect(res["Accountant"]).toEqual(["Edward", "Sam"]);
    expect(res["Baker"]).toEqual(["Leah"]);
  });
});
