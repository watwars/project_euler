function isPrime(num) {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}

function nth(n){
    let isTrue = true;
    let index = 0;
    let check = 1;
    while(isTrue){
        const isPr = isPrime(check);
        if(isPr){
            index++;
        }
        if(index == n){
            isTrue = false;
            return check;
        }
        check++;
    }
}

console.log(nth(10001))