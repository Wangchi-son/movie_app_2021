import React from 'react';
import PropTypes from 'prop-types';

// constructor는 javaScript
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('I am constructor');
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  //기본적인 용도는 "이봐 이 component는 처음 render 됐어"
  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('I just Updated');
  }

  render() {
    console.log('I am rendering');
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
