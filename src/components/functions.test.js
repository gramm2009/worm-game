import { getRandomNumber } from "./functions";

describe("Functions tests", () => {

  describe("getRandomNumber", () => {
    test("getRandomNumber not toBeLessThan 5", () => {
      expect(getRandomNumber(5, 5)).not.toBeLessThan(5);
    });
    test("getRandomNumber not toBeGreaterThan 5", () => {
      expect(getRandomNumber(5, 5)).not.toBeGreaterThan(5);
    });
    test("getRandomNumber toEqual 5", () => {
      expect(getRandomNumber(5, 5)).toEqual(5);
    });
  });
});
