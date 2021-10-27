import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

function App() {
  return (
    <div className="App">
      <>
        <Display result="23" />
        <ButtonPanel />
        <Calculator />
      </>
    </div>
  );
}

export default App;
