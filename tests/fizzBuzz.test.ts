import { describe, it, expect } from "vitest";
import { fizzBuzz } from "../src/fizzbuzz";

describe("FizzBuzz", () => {
	it("should throw an error if the input is less than 0", () => {
		expect(() => fizzBuzz(-1)).toThrowError(
			"Input must be between 0 and 100."
		);
	});

	it("should throw an error if the input is greater than 100", () => {
		expect(() => fizzBuzz(101)).toThrowError(
			"Input must be between 0 and 100."
		);
	});

	it('should return "Fizz" for multiples of 3', () => {
		expect(fizzBuzz(3)).toBe("Fizz");
	});

	it('should return "Buzz" for multiples of 5', () => {
		expect(fizzBuzz(5)).toBe("Buzz");
	});

	it('should return "FizzBuzz" for multiples of both 3 and 5', () => {
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	});

	it("should return the number itself if it is neither a multiple of 3 nor 5", () => {
		expect(fizzBuzz(1)).toBe("1");
	});
});
