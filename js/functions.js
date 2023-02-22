const checkString = (string, length) => string.length <= length;

const checkPalindrom = (string) => {
  const tempString = string.toLowerCase() .replaceAll(' ', '');
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
  return tempString === reverseString;
}

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const stringletter = string[i];
    const parsedLetter = parseInt(stringletter, 10);
    const isNaN = Number.isNaN(parsedLetter);
    if(!isNaN)
      { result += string[i];
        }
  }
    return parseInt(result, 10);
}

const myPadStart = (string, minLeght, pad) => {
  const actualPad = minLeght - string.length;
if(actualPad <= 0) {
  return string;
}
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}


