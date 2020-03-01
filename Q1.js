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
    } else {
      if (lines[i] == "_") {
        res[k] += 1;
      } else {
        res[k] += 0;
      }
    }
  }
  console.log(res);
};
const secondLvl = lines => {};
const thirdLvl = lines => {};

const iter_input = (lines1, lines2, lines3) => {
  let res = [];
  firstLvl(lines1);
  secondLvl(lines2);
  thirdLvl(lines3);
  console.log(res);
};

const getInput = () => {
  array = fs.readFileSync("input_Q1a.txt", "utf8").split("\n");
  console.log(array[0]);
  iter_input(array[0], array[1], array[2]);
};
getInput();
