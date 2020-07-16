function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}

function factors(input){
    var arr= [];
    for(var i = 1; i < input; i++){
        var isPr = isPrime(i)
        if(isPr == true && input % i === 0){
            arr.push(i);
        }
    }
    return arr;
}

function largest(){
    const arr = factors(600851475143);
    return Math.max(...arr);
}

console.log(largest());