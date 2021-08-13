function sum(digits) {
  var sum = 0;
  if (digits == undefined) return "";
  var digi = digits.toString();
  for (var i = 0; i < digi.length; ++i) sum += +digi[i];
  return digi.split("").join(" + ") + " = " + sum;
}
