function findNb(m) {
    let sum = 0;
    let n = 0;
    while (m > sum) {
        n++;
        sum += n**3;
    }
    return sum === m ? n : -1;
}


console.log(findNb(4183059834009))