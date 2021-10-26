const Calculator = (data, buttonName) => {
  let { total, next, operation } = data;

  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', '*', '÷', '='];

  if (operators.includes(buttonName)) {
    if (buttonName === '=') {
      if (total * next && operation) {
        total = (parseFloat(total, 10) + parseFloat(next, 10)).toString(); // perform operation
        next = null;
        operation = null;
      }
    } else {
      if (total * next && operation) {
        total = (parseFloat(total, 10) + parseFloat(next, 10)).toString(); // perform operation
        next = null;
        operation = null;
      }

      if (next && !operation) {
        operation = buttonName;
      } else if (total && !next) {
        console.log('yo');
        operation = buttonName;
      }
    }
  }

  if (numbers.includes(buttonName)) {
    if (!parseFloat(total, 10) && (next && operation)) {
      console.log('hello');
      total = next;
      next = buttonName;
    } else {
      next = next ? next += buttonName : buttonName;
    }
  }

  if (buttonName === '+/-') {
    total = total ? (total * (-1)).toString() : total;
    next = next ? (next * (-1)).toString() : next;
  } else if (buttonName === 'AC') {
    total = '0';
    next = null;
    operation = null;
  } else if (buttonName === '.') {
    next = next ? next += buttonName : '';
  } else if (buttonName === '%') {
    next = ((1 / 100) * next).toString();
  }

  console.log({ total, next, operation });

  return { total, next, operation };
};

export default Calculator;
