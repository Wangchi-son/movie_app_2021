import React from "react";

// function Food({ fav }) {
//   return <h1>I like {fav}</h1>;
// }

function Food(props) {
  return <h1>I like {props.fav}</h1>;
}

const foodILike = [];

// name or fav(anything) = propname(property)
// function App() 안에서 사용된 '<Food />컴포넌트'의 'property'를 function Food()의 argument(인자)로 넣어줌
function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgyopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
