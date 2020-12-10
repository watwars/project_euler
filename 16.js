function addDigit(n){
    if(n < 10){
        return n;
    }else{
        return n%10n + addDigit(n/10n)
    }
}

console.log(addDigit(BigInt(2**1000)))
