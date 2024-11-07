/**
 * Applies the FizzBuzz algorithm to a number.
 * @param n Number between 1 and 100 to check for FizzBuzz.
 * @returns Fizz, Buzz, FizzBuzz, or the number itself.
 */
export const fizzBuzz = (n: number): string => {
	// Check if the input is within the valid range.
	if (n < 0 || n > 100) {
		throw new Error("Input must be between 0 and 100.");
	}

	let result = "";

	// Check whether the number qualifies as Fizz, Buzz, or both.
	const isFizz = n % 3 === 0 || n.toString().includes("3");
	const isBuzz = n % 5 === 0 || n.toString().includes("5");

	// Build the result string.
	if (isFizz) result += "Fizz";
	if (isBuzz) result += "Buzz";

	return result || n.toString();
};
