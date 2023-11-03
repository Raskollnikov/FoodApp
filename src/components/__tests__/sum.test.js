import { sum } from "../sum";
import { test, expect } from "@jest/globals";

test("Sum Function Should calculate the sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
  