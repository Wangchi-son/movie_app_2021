import React from 'react';
import PropTypes from 'prop-types';

// function 컴포넌트와 class 컴포넌트의 차이점은
// function 컴포넌트는 function이고 무언가를 return함 그리고 screen에 표시됨
// class 컴포넌트는 class이지만 react component로부터 확장되고 screen에 표시되고 그걸 render method 안에 넣어야 함

// App 컴포넌트는 React 컴포넌트를 확장시켜 가져옴
// state = object, 따라서 setState는 새로운 state를 받아야함
// component의 data를 넣을 공간이 있고 state데이터는 변함 (바꿀 데이터를 state에 넣어야됨)
// setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않음
// setState를 호출할 때 마다 새로운 state와 함께 render를 재실행
class App extends React.Component {
  state = {
    count: 0,
  };

  // 효율적이지 않은 방법(책의 내용)(this.state.count)
  // add = () => {
  //   console.log('add');
  //   this.setState({ count: this.state.count + 1 });
  // };
  // state를 set할 때, react에서 외부의 상태에 의존하지 않는 가장 좋은 방법(curren.count)
  add = () => {
    console.log('add');
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    console.log('minus');
    this.setState((current) => ({ count: current.count - 1 }));
  };

  render() {
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
