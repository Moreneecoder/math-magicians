const calculate = (calculator, buttonName) => {
  let { total, next, operation } = calculator;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }

  return { total, next };
};

export default calculate;
