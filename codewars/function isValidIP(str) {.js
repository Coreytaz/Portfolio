function isValidIP(str) {
    let count = 0;
    const newarr = str.split(".")
    if (newarr.length === 4) {
        for (let i = 0; i < newarr.length; i++) {
            if (newarr[i].charAt(0) !== "0" && Number(newarr[i]) <= 255) {
                count++;
            }
        }
    }

    if (count === 4) {
        return true;
    }
    return false;
  }

console.log(isValidIP('123.456.789.0'));