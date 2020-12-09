function isPrime(num){
    if(num == 1){
        return false;
    }
    if(num == 2){
         return true;
    }
    const factors = [...Array(Math.ceil(Math.sqrt(num)) + 1).keys()].filter(val => num%val ==0);
    return factors.length == 1 ? true : false;
}

function sumPrimes(max){
    const primes = [...Array(max).keys()].filter(val => isPrime(val));
    return primes.reduce((a, b) => a + b, 0);
}

console.log(sumPrimes(2000000));

// console.log(isPrime(1))


