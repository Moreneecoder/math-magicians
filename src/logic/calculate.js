const Calculator = (data, buttonName) => {
  let { total, next, operation } = data;

  //   const modifiers = ['+/=', '.'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operators = ['+', '-', '*', '÷', '='];

  if (operators.includes(buttonName)) {
    if (total && next) {
      total = (parseInt(total, 10) + parseFloat(next, 10)).toString(); // perform operation
      next = null;
      operation = null;
    }

    if (next) {
      total = (parseInt(total, 10) + parseFloat(next, 10)).toString(); // perform operation
      next = null;
      operation = buttonName;
    }
  } else if (numbers.includes(buttonName)) {
    if (operation) {
      next = buttonName;
      total = (parseInt(total, 10) + parseFloat(next, 10)).toString(); // perform operation
      operation = null;
    } else {
      next = next ? next += buttonName : buttonName;
    }
  }

  if (buttonName === '+/-') {
    total = (total * -1).toString();
    next = (next * -1).toString();
  } else if (buttonName === 'AC') {
    total = '0';
    next = null;
    operation = null;
  } else if (buttonName === '.') {
    next = next ? next += buttonName : '';
  }

  console.log({ total, next, operation });

  return { total, next, operation };
};

export default Calculator;
