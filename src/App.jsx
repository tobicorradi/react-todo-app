import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
const App = () => {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState([]);
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
      <List tasks={tasks} />
    </div>
  );
};

export default App;
