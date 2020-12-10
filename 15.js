

function findRoute(w, h){
    const up = factorialize(w+h);
    const down = factorialize(w) * factorialize(h);
    return up/down
}

function factorialize(n){
    if(n < 1){
        return 1;
    }else{
        return n * factorialize(n - 1)
    }
}

console.log(findRoute(20, 20))