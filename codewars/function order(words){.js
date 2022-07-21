<<<<<<< HEAD
function order(words){
    return words.split(" ").sort((a, b) => a.match(/[0-9]/ig) - b.match(/[0-9]/ig)).join(" ");
}

=======
function order(words){
    return words.split(" ").sort((a, b) => a.match(/[0-9]/ig) - b.match(/[0-9]/ig)).join(" ");
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(order("is2 Thi1s T4est 3a"));