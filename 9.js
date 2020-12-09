function pythagore(){
    for(let a = 3; a < 1000; a++){
        for(let b = 4; b < 1000 - a; b++){
            let c = Math.sqrt(a**2 + b**2);
            if(Number.isInteger(c)){
                if(a + b + c == 1000){
                    return a * b * c;
                }
            }
        }
    }
}

console.log(pythagore())