/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newNumbers = [...numbers];
    const firstNum = newNumbers[0];
    const lastNum = newNumbers[numbers.length - 1];
    const firstandlast = [firstNum, lastNum];
    if (numbers.length < 1) return [];
    else if (numbers.length === 1) {
        newNumbers.push(numbers[0]);
        return newNumbers;
    } else return firstandlast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((price: number): number => price * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newNumbers = numbers.map(Number);

    const finNumbers = newNumbers.map(
        // If the price is NaN, return 0, otherwise use number unchanged
        (price: number): number => (Number.isNaN(price) ? (price = 0) : price),
    );

    return finNumbers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removeDollar = amounts.map(
        // If the price has $, remove $, otherwise use number unchanged
        (price: string): string =>
            price.includes("$") ? price.replace("$", "") : price,
    );

    const newNumbers = removeDollar.map(Number);

    const finNumbers = newNumbers.map(
        // If the price is NaN, return 0, otherwise use number unchanged
        (price: number): number => (Number.isNaN(price) ? (price = 0) : price),
    );

    return finNumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // If the message contains an ?, do not return message.
    const withoutQuestion = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );
    // If the message contains an !, return upper case, otherwise return the original message.
    const shout = withoutQuestion.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message,
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // If the word is longer than 4 words, add 1 to shortWords.
    const newWords = words.filter((word: string): boolean => word.length < 4);
    return newWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // `every` checks if a condition holds for each element (repeatedly and)
    const RGB = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green",
    );
    return RGB;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    const sum = addends.reduce((partialSum, a) => partialSum + a, 0);
    return sum.toString() + "=" + addends.join("+");
}

function findNegative(value: number) {
    return value < 0;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // find the index of the negative number
    const negativeIndex = values.findIndex(findNegative);
    // reduce to get sum before negative number and save as constant
    const beforeNegative = values.slice(0, negativeIndex);
    // get the sum of the values before the negative index
    let sum;
    if (negativeIndex === -1) {
        sum = values.reduce((partialSum, a) => partialSum + a, 0);
    } else {
        sum = beforeNegative.reduce((partialSum, a) => partialSum + a, 0);
    }
    const newNumbers = values.map((value: number): number => value);
    if (negativeIndex === -1) {
        newNumbers.push(sum);
    } else {
        newNumbers.splice(negativeIndex + 1, 0, sum);
    }
    return newNumbers;
}
