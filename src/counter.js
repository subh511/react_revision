import React from "react";
import { useState } from "react";
import TodoApp from "./todoApp";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
     <CustomButton count={count} setCount={setCount}></CustomButton>
     <TodoApp></TodoApp>
    </div>
  );
}

function CustomButton(props) {

  //let count = 0;
  function onClickHandler() {
    props.setCount(props.count + 1)
  }

  return(
    <button onClick={onClickHandler}>
    {props.count}
    </button>
  )
}

export default Counter;