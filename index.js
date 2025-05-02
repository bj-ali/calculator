function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').textContent = "Please enter valid numbers.";
      return;
    }
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          result = "Cannot divide by zero.";
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Invalid operation.";
    }
  
    document.getElementById('result').textContent = "Result: " + result;
  }
  