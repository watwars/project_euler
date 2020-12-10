const numbers = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};
const tenth = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};

function translate(n) {
  if (n === 1000) {
    return "onethousand";
  } else if(n % 100 == 0){
      return numbers[n / 100] + "hundred"
  }
  else if (n < 20) {
    return numbers[n];
  } else if (n < 100) {
    const t = Math.floor(n / 10);
    const u = n - t * 10;
    return tenth[t] + (numbers[u] || "");
  } else {
    const h = Math.floor(n / 100);
    const rest = n - h * 100;
    if (rest < 20) {
      return numbers[h] + "hundredand" + (numbers[rest] || "");
    } else {
      const t = Math.floor(rest / 10);
      const u = rest - t * 10;
      return numbers[h] + "hundredand" + (tenth[t] || "") + (numbers[u] || "");
    }
  }
}

function count(n) {
  const words = translate(n);
  console.log(words)
  const arr = words.split("");
  return arr.length;
}

function total(max){
    let result = 0;
    for(let i = 1; i <= max; i++){
        result += count(i)
    }
    return result;
}

console.log(total(1000))