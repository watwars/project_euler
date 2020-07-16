function isPalin(n) {
  var rem,
    temp,
    final = 0;
  var number = n;

  temp = number;
  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    return true;
  } else {
    return false;
  }
}

function largest(){
    let arr= []
    for(let i = 1000; i > 100; i--){
        for(let j = 1000; j > 100; j--){
            const result = i * j;
            if(isPalin(result)){
                arr.push(result)
            }
        }
    }
    return Math.max(...arr)
}

console.log(largest())
