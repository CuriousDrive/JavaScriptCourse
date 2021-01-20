function submit() {
    
    let x = 20;
    let y = 10;

    let addition = add(x, y);
    let substraction = substract(x, y);
    debugger;
    let multiplication = multiply(x, y);
    let division = divide(x, y);

    console.log("Addition is : " + addition);
    console.log("Substraction is : " + substraction);
    console.log("Multiplication is : " + multiplication);
    console.log("Division is : " + division);
}

function add(x, y) {
    var result = x + y;
    return result;
}

function substract(x, y) {
    var result = x - y;
    return result;
}

function multiply(x, y) {
    var result = x ** y;
    return result;
}

function divide(x, y) {
    var result = x / y;
    return result;
}