const contentArr = [
    ["AC", "+/-", "%", "÷"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["cal", "0", ".", "="]
  ];
  
  const calculations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "÷": (a, b) => a / b,
    "%": (a, b) => a % b
  };
  
  var operators = ["+/-", "%", "÷", "*", "-", "+", "="];
  var expression_arr = [];
  var values_to_cal = "";
  
  var content_table_tbody = document.querySelector(
    ".calculator-content table tbody"
  );
  for (var i = 0; i < contentArr.length; i++) {
    var newRow = document.createElement("tr");
    for (var j = 0; j < contentArr[i].length; j++) {
      let newCell = document.createElement("td");
      let newButton = document.createElement("button");
      let value = contentArr[i][j];
  
      newButton.textContent = value;
      newButton.onclick = function () {
        addToCalculate(value);
      };
      newCell.appendChild(newButton);
      newRow.appendChild(newCell);
    }
    content_table_tbody.appendChild(newRow);
  }
  
  function addToCalculate(value) {
    (value !== "=")?document.getElementById('result_detail').append (value):"" ;
    if (!isOperator(value)) {
      values_to_cal = values_to_cal.concat(value);
    } else {
      if (value !== "=") {
         expression_arr.push(values_to_cal)
         expression_arr.push(value)
         values_to_cal=""
      }
      else{
        expression_arr.push(values_to_cal)
        var final_result = calculate();
        document.getElementById('result').append (final_result) ;
      }
    }
  }
  
  function isOperator(valToCal) {
    return operators.includes(valToCal);
  }
  
  function calculate() {
    console.log(expression_arr);
    var operand1 = 0;
    var operand2 = 0;
    var result = 0;
    if (expression_arr.length > 0) {
      for (var k = 0; k < expression_arr.length; k++) {
        if (isOperator(expression_arr[k])) {
          operand1 = Number(expression_arr[k - 1]);
          operand2 = Number(expression_arr[k + 1]);
          result = calculations[expression_arr[k]](operand1, operand2);
          expression_arr[k + 1] = result
        }
      }
      expression_arr =[]
      return result;
    }
  }
  