const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != "string" || !isNaN(sampleActivity)) return false;
  // remove line with error and write your code here
  let number;

  number = Math.ceil(
    (Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD) / 0.693
  );
  if (isNaN(number)) {
    return false;
  } else {
    return number;
  }
};
