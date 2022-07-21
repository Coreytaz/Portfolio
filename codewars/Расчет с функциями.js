function zero() {
    if (arguments.length === 0) {
        return 0;
    }
    return doMath(0,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function one() {
    if (arguments.length === 0) {
        return 1;
    }
    return doMath(1,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function two() {
    if (arguments.length === 0) {
        return 2;
    }
    return doMath(2,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function three() {
    if (arguments.length === 0) {
        return 3;
    }
    return doMath(3,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function four() {
    if (arguments.length === 0) {
        return 4;
    }
    return doMath(4,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function five() {
    if (arguments.length === 0) {
        return 5;
    }
    return doMath(5,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function six() {
    if (arguments.length === 0) {
        return 6;
    }
    return doMath(6,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function seven() {
    if (arguments.length === 0) {
        return 7;
    }
    return doMath(7,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function eight() {
    if (arguments.length === 0) {
        return 8;
    }
    return doMath(8,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}
function nine() {
    if (arguments.length === 0) {
        return 9;
    }
    return doMath(9,arguments[0].toString().split(" ")[0],Number(arguments[0].toString().split(" ")[1]))
}

function plus() {
    return "+ " + arguments[0];
}
function minus() {
    return "- " + arguments[0];
}
function times() {
    return "* " + arguments[0];
}
function dividedBy() {
    return "/ " + arguments[0];
}

function doMath(x,znak,y){
	var math = 0;
	switch(znak) {
		case '+':
		math = x + y;
		break;

		case '-':
		math = x - y;
		break;

		case '*':
		math = x * y;
		break;

		case '/':
		math = x / y;
		break;
	}
	return Math.floor(math)
}



console.log(eight(dividedBy(nine())));