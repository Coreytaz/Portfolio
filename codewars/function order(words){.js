function order(words){
    return words.split(" ").sort((a, b) => a.match(/[0-9]/ig) - b.match(/[0-9]/ig)).join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));