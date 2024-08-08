 function calculate() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var operator = document.getElementById("operator").value;
  var result; // Declare result variable

  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);    
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2); 
      break;
    case "/":   
      result = parseFloat(num1) / parseFloat(num2);
      break;  
    default:
      result = "Error"; 
      break;
  } 
  document.getElementById("result").value = result;
} 