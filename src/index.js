module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  for (i = 0; i < str.length / 2; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      newStr = newStr.replace(bracketsConfig[j][0] + bracketsConfig[j][1], '');
    }
  }
  return newStr.length === 0;
}
