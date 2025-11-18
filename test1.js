let i = 0;
let result = 0;
while (i < 5) {
  if (i === 3) {
    i++;
    break;
  }
  result += i;
  i++;
}
console.log(i);
