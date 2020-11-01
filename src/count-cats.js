const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  // remove line with error and write your code here
  let number = 0;
  for (let j = 0; j < backyard.length; j++) {
    for (let n = 0; n < backyard[j].length; n++) {
      if (backyard[j][n] == '^^') number +=1;
    }
  }
  return number;
};
