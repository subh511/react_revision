import React from "react";

import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9pm",
      completed: false,
    },
    {
      title: "Study Dsa",
      description: "Go to gym from 4-9pm",
      completed: true,
    },
  ]);

  function addTodo(){
    setTodos([...todos,{
        title:"hwllo",
        description:"World"
    }])
  }

  return (
    <div>
    <button onClick={addTodo}>Add random todos</button>
      {todos.map((elem) => {
        return (
          <div>
            <h1>{elem.title}</h1>
            <h2>{elem.description}</h2>
          </div>
        );
      })}
      <DummyButton></DummyButton>
    </div>
  );
}

function DummyButton(){
    console.log("re rendered dummy Button!");
    <button>asad</button>
}

export default TodoApp;
