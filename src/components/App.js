import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';
import '../stylesheets/app.css';

const App = () => {
  const [total, setTotal] = useState('0');
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (btnData) => {
    const { newTotal, newNext, newOperation } = Calculator({ total, next, operation }, btnData);

    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };

  return (
    <div className="App">
      <>
        <Display result={next || total} />
        <ButtonPanel handleClick={handleClick} />
      </>
    </div>
  );
};

export default App;
