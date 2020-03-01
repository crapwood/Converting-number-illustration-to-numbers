var fs = require("fs");
var readline = require("readline");

let array = [];

const numbers = {
  63: 0,
  6: 1,
  48: 1,
  109: 2, // 91: 2,
  121: 3, // 79: 3,
  114: 4, // 102: 4,
  91: 5, // 109: 5,
  95: 6, // 125: 6,
  49: 7, // 7: 7,
  127: 8,
  123: 9, // 111: 9,
  0: " "
};

const firstLvl = lines => {
  let k = 0;
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < lines.length; i++) {
    if (i % 3 == 0 && i != 0) {
      k++;
    }
    if (lines[i] == "_") {
      res[k] += 1;
    } else {
      res[k] += 0;
    }
  }
  return res;
};
const secondLvl = lines => {
  let k = 0;
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < lines.length; i++) {
    if (i % 3 == 0 && i != 0) {
      k++;
    }
    if (lines[i] == "_") {
      res[k] += 64;
    } else if (lines[i] == "|") {
      if (i % 3 == 0) {
        res[k] += 2;
      } else {
        res[k] += 32;
      }
    } else {
      res[k] += 0;
    }
  }
  return res;
};
const thirdLvl = lines => {
  let k = 0;
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < lines.length; i++) {
    if (i % 3 == 0 && i != 0) {
      k++;
    }
    if (lines[i] == "_") {
      res[k] += 8;
    } else if (lines[i] == "|") {
      if (i % 3 == 0) {
        res[k] += 4;
      } else {
        res[k] += 16;
      }
    } else {
      res[k] += 0;
    }
  }
  return res;
};

const iter_input = (lines1, lines2, lines3) => {
  let parseAsciiToNumber = "";
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let res1 = firstLvl(lines1);
  let res2 = secondLvl(lines2);
  let res3 = thirdLvl(lines3);
  for (let i = 0; i < res1.length; i++) {
    res[i] += res1[i] + res2[i] + res3[i];
  }
  for (const num of res) {
    if (num in numbers) {
      parseAsciiToNumber += numbers[num];
    } else {
      parseAsciiToNumber += "?";
    }
  }
  return parseAsciiToNumber;
};

const getInput = () => {
  array = fs.readFileSync("input_Q1a.txt", "utf8").split("\n");
  // check first line first if it works

  let afterParse = [];

  for (let i = 0; i < array.length - 4; i += 4) {
    afterParse.push(iter_input(array[i], array[i + 1], array[i + 2]));
  }
  console.log(afterParse);
};
getInput();
