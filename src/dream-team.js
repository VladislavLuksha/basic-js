const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  let result = "";
  members.forEach((element) => {
    if (typeof element === "string") {
      element = element.toUpperCase();
      for (let i = 0; i < element.length; i++) {
        if (element[i] === " ") {
          element = element.trim();
        }
      }
      result += element.substr(0, 1);
    }
  });
  return result.split("").sort().join('');
};
