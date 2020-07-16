function sumOfSquare(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += (i*i);
    }
    return total;
}

function squareOfSum(n){
    let total = (n * (n + 1))/ 2
    return total * total;
}

function result(num){
    return squareOfSum(num) - sumOfSquare(num);
}


console.log(result(100))