document.addEventListener('keydown', logKey);

function logKey(e) {

  /** Declare value  */
    let value = e.key;
    // console.log(value); //Debug

    /** Detect keypress and do the button stuff.
     * If value is number or period with only one than appendNumber.
     * else if condition operator
     * If backspace pressed detect isResult is true and previous operand is null do clear function 
     * than do delete function
     * otherwise just do delete function  
     */
    if(Number.isInteger(parseInt(value)) || (value === '.' && !calculator.currentOperand.includes('.'))) {
      if(isResult && calculator.previousOperand === '') calculator.clear();
      calculator.appendNumber(value);
      calculator.updateDisplay();
    } else if(value === '+' || value === '-' || value === '*' || value === '/') {
      calculator.chooseOperation(value);
      calculator.updateDisplay();
    } else if(value === 'Enter' || value === '=') {
      calculator.compute();
      calculator.updateDisplay();
    } else if(value === 'Backspace') {
      if(isResult && calculator.previousOperand === '') calculator.clear();
      else calculator.delete();
      calculator.updateDisplay();
    } else if(value === 'Delete') {
      calculator.clear();
      calculator.updateDisplay();
    } else return;
}


