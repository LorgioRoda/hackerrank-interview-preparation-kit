function repeatedString(s, n) {
  const as = s.split("").filter((c) => c === "a").length;
  const times = parseInt(n / s.length);
  const rest = n % s.length;

  const totalAs =
    times * as +
    s
      .slice(0, rest)
      .split("")
      .filter((c) => c === "a").length;

  return totalAs;
}
