function isValidIP(str) {
    let count = 0;
    const newarr = str.split(".")
    console.log(str);
    return newarr.filter(e => {return e == Number(e).toString() && Number(e) < 256}).lenght == 4;
}

console.log(isValidIP("137.255.156.100"));