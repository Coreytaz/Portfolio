<<<<<<< HEAD
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    const a = input.filter(e => e > 0);
    return [a.length, input.filter(e => e < 0) < 0 ? input.filter(e => e < 0).reduce((sum, current) => sum + current, 0) : input.filter(e => e < 0).map(e => e * -1).reduce((sum, current) => sum + current, 0) * -1];
}

=======
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    const a = input.filter(e => e > 0);
    return [a.length, input.filter(e => e < 0) < 0 ? input.filter(e => e < 0).reduce((sum, current) => sum + current, 0) : input.filter(e => e < 0).map(e => e * -1).reduce((sum, current) => sum + current, 0) * -1];
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(countPositivesSumNegatives([-42]))