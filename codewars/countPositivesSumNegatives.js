function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    const a = input.filter(e => e > 0);
    return [a.length, input.filter(e => e < 0) < 0 ? input.filter(e => e < 0).reduce((sum, current) => sum + current, 0) : input.filter(e => e < 0).map(e => e * -1).reduce((sum, current) => sum + current, 0) * -1];
}

console.log(countPositivesSumNegatives([-42]))