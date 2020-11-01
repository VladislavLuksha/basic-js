const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  repeatTimes = repeatTimes || 1;
  separator = separator || '+';
  additionRepeatTimes = additionRepeatTimes || 1;
  additionSeparator = additionSeparator || '|';
  
  let resultArray = [];
  let temporaryArray = [];
  for (let i = 0; i < repeatTimes; i++) {
    temporaryArray = [];
    for (let j = 0; j < additionRepeatTimes; j++) {
      temporaryArray.push(addition === null ? String(addition) : addition);
    }
    resultArray.push(str + temporaryArray.join(additionSeparator));
  }
  return resultArray.join(separator);
};
  