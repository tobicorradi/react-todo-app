import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "I am an example",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Hi!",
    },
    {
      id: 3,
      text: "Wow",
    },
  ]);
  return (
    <div className="app">
      <h1>
        React to do app <span>by Tobías Corradi</span>
      </h1>
      <Form
        tasks={tasks}
        setTasks={setTasks}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />
      {!tasks.length ? (
        <div className="no-tasks">
          <img src="calendar.png" alt="" />
          <p>No tasks added</p>
        </div>
      ) : (
        <List tasks={tasks} setTasks={setTasks} />
      )}
    </div>
  );
};

export default App;
