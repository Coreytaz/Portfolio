<<<<<<< HEAD
function alg(n, k) {
    let otvet = n;
    let count = 0;
    let temp = 0;
    let i = 0;
    for (i = 0; i < n; i++) {
        if (k === 1) {
            continue;
        }
        if (trei(i) > otvet) {
            k--
            temp = i;
        }
        count++;
    }
    i = trei(temp - 1)
    while (k !== 0) {
        if (i === otvet) {
            k--
        }
        i++
        count++;
    }
    return count;
}

function trei(n) {
    return 1 / 2 * n * (n + 1)
}

=======
function alg(n, k) {
    let otvet = n;
    let count = 0;
    let temp = 0;
    let i = 0;
    for (i = 0; i < n; i++) {
        if (k === 1) {
            continue;
        }
        if (trei(i) > otvet) {
            k--
            temp = i;
        }
        count++;
    }
    i = trei(temp - 1)
    while (k !== 0) {
        if (i === otvet) {
            k--
        }
        i++
        count++;
    }
    return count;
}

function trei(n) {
    return 1 / 2 * n * (n + 1)
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(alg(4999,2));