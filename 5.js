
function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  //Euclidean recursive algorithm
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
  function multiple(n) {
    let maxLCM = 1;
  
    //Getting the LCM in the range
    for (let i = 2; i <= n; i++) {
      maxLCM = lcm(maxLCM, i);
    }
    return maxLCM;
  }

console.log(multiple(20))