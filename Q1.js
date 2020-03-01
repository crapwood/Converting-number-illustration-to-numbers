var fs = require("fs");
var readline = require("readline");

let array = [];

const numbers = {
  63: 0,
  6: 1,
  91: 2,
  79: 3,
  102: 4,
  109: 5,
  125: 6,
  7: 7,
  127: 8,
  111: 9,
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
  let res = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let res1 = firstLvl(lines1);
  let res2 = secondLvl(lines2);
  let res3 = thirdLvl(lines3);
  for (let i = 0; i < 9; i++) {
    let temp = res1[i] + res2[i];
    res[i] += temp + res3[i];
  }
  console.log(res);
};

const getInput = () => {
  array = fs.readFileSync("input_Q1a.txt", "utf8").split("\n");
  // check first line first if it works
  iter_input(array[0], array[1], array[2]);
};
getInput();
