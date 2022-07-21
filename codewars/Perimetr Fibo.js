<<<<<<< HEAD
function perimeter(n) {
    const arr = [];
    for (let i = 1; i <= n + 1; i++) {
        arr.push(fib(i));

    }
    return arr.reduce((a , b) => a + b, 0) * 4;
}
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

=======
function perimeter(n) {
    const arr = [];
    for (let i = 1; i <= n + 1; i++) {
        arr.push(fib(i));

    }
    return arr.reduce((a , b) => a + b, 0) * 4;
}
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(perimeter(5));