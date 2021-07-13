/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path */
function countingValleys(steps, path) {
  let valleysCount = 0;
  let currentLevel = 0;
  let previousLevel = 0;

  for (let i = 0; i < path.length; i++) {
    previousLevel = currentLevel;
    if (path[i] === "U") {
      currentLevel += 1;
    } else {
      currentLevel -= 1;
    }
    if (previousLevel === 0 && currentLevel < 0) {
      valleysCount += 1;
    }
  }
  return valleysCount;
}
