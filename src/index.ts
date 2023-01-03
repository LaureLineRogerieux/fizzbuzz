const isMultipleOf = (divider: number, n: number): boolean => {
  return n % divider === 0;
};

const STRING_FOR_MULTIPLE_OF_3 = "fizz";

const STRING_FOR_MULTIPLE_OF_5 = "buzz";

const range = (n: number): number[] => {
  return [...new Array(n)].map((_, index) => index + 1);
};

export const replaceNumber = (n: number): string => {
  let output = "";

  if (isMultipleOf(3, n)) {
    output += STRING_FOR_MULTIPLE_OF_3;
  }

  if (isMultipleOf(5, n)) {
    output += STRING_FOR_MULTIPLE_OF_5;
  }

  return output || `${n}`;
};

export const fizzbuzz = (n: number): string[] => {
  return range(n).map(replaceNumber);
};
