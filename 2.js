

function fibo(n){
    if(n > 2){
        return fibo(n-1) + fibo(n-2);
    }else{
        return 1;
    }
}

function even(max){
    let total = 0;
    let index = 1;
    let isTrue = true
    while(isTrue){
        var fib = fibo(index);
        if(fib > max){
            isTrue = false;
        }
        if(fib % 2 === 0){
            total += fib
        }
        index++;
    }
    return total;
}


console.log(even(4000000))