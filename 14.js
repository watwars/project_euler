
function findChain(num){
    let length = 1;
    let step = num;
    while(step != 1){
        if(step % 2 == 0){
            step/=2;
        }else{
            step = step*3 + 1;
        }
        length++;
    }
    return length;
}

function findLongest(min, max){
    let longest = 0;
    let result = 1;
    for(let i = min; i <= max; i++){
        const chain = findChain(i);
        console.log(i)
        if(chain > longest){
            longest = chain;
            result = i;
        }
    }
    return result;
}


console.log(findLongest(1, 1000000))

// console.log(findChain(862278))
// console.log(findChain(837799))
