const checkString = (string, length) => string.length <= length;

const checkPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('') ;
};

const extractNumber = (string) => {
  string = string.replace(/\D/g, '');
  return parseInt(string, 10);
};

const createNewString = (string, minLenght, pad) => {
  while (string.length < minLenght) {
    string = pad.slice (0, minLenght - string.length) + string;
  }
  return string;
};


