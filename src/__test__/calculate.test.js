import Calculator from '../logic/calculate';

describe('Calculate', () => {
  const dataSet = {
    total: '51',
    next: '10',
    operation: '+',
  };

  describe('When \'AC\' clicked', () => {
    it('should set total to 0 and next, operation to null', () => {
      const expectation = { newTotal: '0', newNext: null, newOperation: null };
      expect(Calculator(dataSet, 'AC')).toEqual(expectation);
    });
  });

  it('can perform basic addtions', () => {
    expect(Calculator(dataSet, '=').newTotal).toBe((61).toString());
    expect(Calculator(dataSet, '-').newTotal).toBe((61).toString());
  });

  it('can perform basic subtractions', () => {
    dataSet.operation = '-';
    expect(Calculator(dataSet, '=').newTotal).toBe((41).toString());
    expect(Calculator(dataSet, '+').newTotal).toBe((41).toString());
  });

  it('can perform basic multiplications', () => {
    dataSet.operation = 'X';
    expect(Calculator(dataSet, '=').newTotal).toBe((510).toString());
    expect(Calculator(dataSet, '+').newTotal).toBe((510).toString());
  });

  it('can perform basic divisions', () => {
    dataSet.operation = '÷';
    expect(Calculator(dataSet, '=').newTotal).toBe((5.1).toString());
    expect(Calculator(dataSet, '+').newTotal).toBe((5.1).toString());
  });

  it('can convert number to positive or minus', () => {
    dataSet.operation = null;
    const calculation = Calculator(dataSet, '+/-');

    dataSet.total = calculation.newTotal;
    dataSet.next = calculation.newNext;

    expect(calculation).toEqual({
      newTotal: '-51',
      newNext: '-10',
      newOperation: null,
    });

    expect(Calculator(dataSet, '+/-')).toEqual({
      newTotal: '51',
      newNext: '10',
      newOperation: null,
    });
  });

  it('can calculate percentage of a number', () => {
    dataSet.total = '51';
    dataSet.next = '10';
    expect(Calculator(dataSet, '%').newNext).toBe((0.1).toString());
  });
});
