function jumpingOnClouds(c) {
  let jumpscounter = 0;
  let i = 0;

  do {
    jumpscounter++;
    i = c[i + 2] == 0 ? i + 2 : i + 1;
  } while (i < c.length - 1);
  return jumpscounter;
}
