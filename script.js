function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function modulus(a, b) {
    return a % b;
  }
  
  function calculate() {
    var a = parseInt(prompt("Enter first number"));
    var b = parseInt(prompt("Enter second number"));
    var operator = prompt("Enter operator from the list +, -, *, /");
    var result;
    switch (operator) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = subtract(a, b);
        break;
      case "*":
        result = multiply(a, b);
        break;
      case "/":
        result = divide(a, b);
        break;
      case "%":
        result = modulus(a, b);
        break;
      default:
        alert("Invalid operator");
        break;
    }
    alert(result);
  }
  calculate();




// // var opr = prompt("Operator: ")
// // var num1 = parseInt(prompt("Number 1: "))
// // var num2 = parseInt(prompt("Number 2: "))

// // if(opr == "+")
// // {
// //     console.log(num1 + num2)
// // } else if(opr == "-")
// // {
// //     console.log(num1 - num2)
// // } else if(opr == "*")
// // {
// //     console.log(num1 * num2)
// // } else if(opr == "/")
// // {
// //     console.log(num1 / num2)
// // } else if(opr == "%")
// // {
// //     console.log(num1 % num2)
// // } 



// function askUser() {
//     var num1 = prompt( "Enter first number");
//     var num2 = prompt( "Enter second number");
//     var operator = prompt( "Enter operator");
//     var result = 0;
//     if (operator == "+") {
//         result = add(num1, num2);
//     }
//     else if (operator == "-") {
//         result = subtract(num1, num2);
//     }
//     else if (operator == "*") {
//         result = multiply(num1, num2);
//     }
//     else if (operator == "/") {
//         result = divide(num1, num2);
//     }
//     else {
//         alert("Please enter a valid operator");
//     }
//     alert(result);
// }
// askUser();











