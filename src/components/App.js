import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from '../logic/calculate';
import '../stylesheets/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: null,
      operation: null,
    };

    this.handleClick = (data) => {
      const calculation = Calculator(this.state, data);
      this.setState(calculation);
    };
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App">
        <>
          <Display result={next || total} />
          <ButtonPanel handleClick={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
