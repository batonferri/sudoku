export const stringToTwoDimensionalArray = (string) => {
  const arr = [];
  for (const element of string.replaceAll(".", "0").match(/.{1,9}/g)) {
    arr.push(arrayOfStringToArrayOfNumbers(element.split("")));
  }

  return arr;
};

export const twoDimensionalArrayToString = (array) => {
  return array.flat().join("").replaceAll("0", ".");
};

export const arrayOfStringToArrayOfNumbers = (arr) => {
  const newArr = [];
  for (const defaultElement of arr) {
    newArr.push(Number(defaultElement));
  }
  return newArr;
};
