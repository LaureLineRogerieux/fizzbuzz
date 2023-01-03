import { fizzbuzz, replaceNumber } from ".";

describe("test of replace number", () => {
  test("should return the number by default", () => {
    expect(replaceNumber(1)).toEqual("1");
  });

  test("should return the number by default - triangulation", () => {
    expect(replaceNumber(2)).toEqual("2");
  });

  test("should replace by fizz if the number is multiple of 3", () => {
    expect(replaceNumber(3)).toEqual("fizz");
  });

  test("should replace by fizz if the number is multiple of 3 - Triangulation", () => {
    expect(replaceNumber(3 * 2)).toEqual("fizz");
  });

  test("should replace by fizz if the number is multiple of 5", () => {
    expect(replaceNumber(5)).toEqual("buzz");
  });

  test("should replace by fizz if the number is multiple of 5", () => {
    expect(replaceNumber(5 * 2)).toEqual("buzz");
  });

  test("should replace by fizz if the number is multiple of 3 and 5", () => {
    expect(replaceNumber(3 * 5)).toEqual("fizzbuzz");
  });

  test("should replace by fizz if the number is multiple of 3 and 5 - Triangulation", () => {
    expect(replaceNumber(3 * 5 * 2)).toEqual("fizzbuzz");
  });
});

describe("test fizzbuzz function", () => {
  test("should replaceNumber for all number between 1 and 100", () => {
    expect(fizzbuzz(1)).toEqual(["1"]);
  });

  test("should replaceNumber for all number between 1 and 100", () => {
    expect(fizzbuzz(2)).toEqual(["1", "2"]);
  });

  test("should replaceNumber for all number between 1 and 100", () => {
    expect(fizzbuzz(3)).toEqual(["1", "2", "fizz"]);
  });
});
