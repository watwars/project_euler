function multiple(n){;
    let total = 0
    for(let i = 0; i < n; i ++){
        if(i % 3 === 0 || i % 5 === 0){
            total += i;
        }
    }
    console.log(total);
}

multiple(1000);