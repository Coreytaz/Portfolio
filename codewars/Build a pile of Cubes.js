<<<<<<< HEAD
function findNb(m) {
    let sum = 0;
    let n = 0;
    while (m > sum) {
        n++;
        sum += n**3;
    }
    return sum === m ? n : -1;
}


=======
function findNb(m) {
    let sum = 0;
    let n = 0;
    while (m > sum) {
        n++;
        sum += n**3;
    }
    return sum === m ? n : -1;
}


>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(findNb(4183059834009))