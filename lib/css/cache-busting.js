module.exports = function (str, spritePath) {
  var regexs = {
    withQuote: /(url[(]['|"|\])([)])(.*)(['|"][)])/g,
    withoutQuote: /(url[(])([a-zA-Z])(.*)([)])/g
  };
  var timestamp = new Date().getTime();
  var spritePathCropped = spritePath.substr(1);

  str = str.replace(regexs.withQuote, function (full, group1, group2, group3) {
    var isSvg = group2 === spritePath + '.svg';
    var isPng = group2 === spritePath + '.png';

    if (isSvg || isPng)
      group2 = group2 + '?v=' + timestamp;

    return group1 + group2 + group3;
  });

  str = str.replace(regexs.withoutQuote, function (full, group1, group2, group3, group4) {
    var isSvg = group3 === spritePathCropped + '.svg';
    var isPng = group3 === spritePathCropped + '.png';

    if (isSvg || isPng)
      group3 = group3 + '?v=' + timestamp;

    return group1 + group2 + group3 + group4;
  });

  return str;
};
