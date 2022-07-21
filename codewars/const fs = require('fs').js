<<<<<<< HEAD
const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(' ');

const result = Number(a) + Number(b);

fs.writeFileSync("output.txt", result.toString());

=======
const fs = require('fs')
let fileContent = fs.readFileSync("input.txt", "utf8");

const [a, b] = fileContent.toString().split(' ');

const result = Number(a) + Number(b);

fs.writeFileSync("output.txt", result.toString());

>>>>>>> aaf501b62c0968ec9b3fb5ccaf718b18b67e01db
https://nodejs.org/api/readline.html