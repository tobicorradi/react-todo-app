import React from "react";
import "./Form.css";
const Form = ({ tasks, setTasks, inputTask, setInputTask }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([
      {
        id: Math.random() * 1000,
        text: inputTask,
        isCompleted: false,
      },
      ...tasks,
    ]);
    console.log(tasks);
    setInputTask("");
  };
  return (
    <form className="form">
      <input
        onChange={(e) => setInputTask(e.target.value)}
        className="form__input"
        type="text"
        placeholder='"Learn how to code at 16.40"'
        value={inputTask}
      />
      <button onClick={submitHandler} className="form__btn" type="submit">
        <img src="add.png" alt="" />
      </button>
    </form>
  );
};

export default Form;
