// function multiple(n){
//     let smallest = 1;
//     let isFound = false;
//     while(isFound = false){
//         let arr = [];
//         for(let i = 1; i <= n; i++){
//             if(smallest % i == 0){
//                 arr.push(i)
//             }
//         }
//         if(arr.length == n){
//             console.log(arr);
//             isFound = true;
//             return smallest;
//         }
//         smallest++;
//     }
// }

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