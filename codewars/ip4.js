<<<<<<< HEAD
function isValidIP(str) {
    let count = 0;
    const newarr = str.split(".")
    console.log(str);
    return newarr.filter(e => {return e == Number(e).toString() && Number(e) < 256}).lenght == 4;
}

=======
function isValidIP(str) {
    let count = 0;
    const newarr = str.split(".")
    console.log(str);
    return newarr.filter(e => {return e == Number(e).toString() && Number(e) < 256}).lenght == 4;
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(isValidIP("137.255.156.100"));