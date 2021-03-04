import React from 'react';
import PropTypes from 'prop-types';

// function 컴포넌트와 class 컴포넌트의 차이점은
// function 컴포넌트는 function이고 무언가를 return함 그리고 screen에 표시됨
// class 컴포넌트는 class이지만 react component로부터 확장되고 screen에 표시되고 그걸 render method 안에 넣어야 함

// App 컴포넌트는 React 컴포넌트를 확장시켜 가져옴
// state = object
// component의 data를 넣을 공간이 있고 state데이터는 변함 (바꿀 데이터를 state에 넣어야됨)
class App extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return <h1>The number is {this.state.count}</h1>;
  }
}

export default App;
