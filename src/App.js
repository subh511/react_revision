import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     <CustomButton count={count} setCount={setCount}></CustomButton>
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

export default App;
