import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
    //   next: null,
    //   operation: null,
    };

    this.handleClick = (data) => {
      this.setState({
        total: data,
      });
    };
  }

  render() {
    const { total } = this.state;
    return (
      <div className="App">
        <>
          <Display result={total} />
          <ButtonPanel handleClick={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
