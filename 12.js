function findTriangles(max) {
  isFound = false;
  let count = 1;
  let sum = 0;

  while (!isFound) {
    sum += count;
    let numFactors = findFactors(sum).length;

    if (numFactors >= max) {
      isFound = true;
      return sum;
    } else {
      console.log(count);
      count++;
    }
  }
}

function findFactors(n) {
  let arr = [],
    i = 1,
    max = n;

  while (i < max) {
    if (n % i === 0) {
      arr.push(i); 

      let k = n / i; 
      if (i !== k) {
        arr.push(k); 
      }
      max = k;
    }

    i++;
  }

  return arr.sort((a, b) => a - b);
}

console.log(findTriangles(500));
// console.log(findFactors(10))
