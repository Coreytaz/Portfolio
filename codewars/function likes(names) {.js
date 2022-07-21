<<<<<<< HEAD
function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    }
    if (names.length === 1) {
        return `${names[0]} likes thisi`;
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    }
    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

=======
function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    }
    if (names.length === 1) {
        return `${names[0]} likes thisi`;
    }
    if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    }
    if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));