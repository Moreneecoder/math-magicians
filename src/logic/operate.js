import Big from 'big.js';

const operate = (firstNum, secondNum, operation) => {
  let output;
  const [first, second] = [Big(firstNum), Big(secondNum)];
  if (operation === '+') {
    output = first.plus(second);
  }
  if (operation === '-') {
    output = first.minus(second);
  }
  if (operation === 'X') {
    output = first.times(second);
  }
  if (operation === '÷') {
    output = first.div(second);
  }
  return output.toString();
};

export default operate;
