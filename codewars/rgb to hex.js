<<<<<<< HEAD
function rgb(r, g, b){
    return `${hex(r)}${hex(g)}${hex(b)}`
}

function hex(num){
    if(num < 0){
        num = 0
    }
    if(num >= 255){
        num = 255;
    }
    let newNum = num.toString(16);
    return newNum.length == 1 ? "0" + newNum.toUpperCase() : newNum.toUpperCase();
}

=======
function rgb(r, g, b){
    return `${hex(r)}${hex(g)}${hex(b)}`
}

function hex(num){
    if(num < 0){
        num = 0
    }
    if(num >= 255){
        num = 255;
    }
    let newNum = num.toString(16);
    return newNum.length == 1 ? "0" + newNum.toUpperCase() : newNum.toUpperCase();
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(rgb(255, 255, 255));