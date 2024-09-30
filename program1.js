/**
 * @param {string}
 * @return {boolean}
 */
var isValid = function (str) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

module.exports = { isValid };
