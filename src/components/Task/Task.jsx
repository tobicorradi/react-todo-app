import React from "react";
import "./Task.css";
const Task = ({ text, task, tasks, setTasks }) => {
  const deleteHandler = () => {
    setTasks(tasks.filter((element) => element.id !== task.id));
  };
  const completeTask = () => {};
  return (
    <li className="task">
      <div className="task__main">
        <input onClick={completeTask} className="task__input" type="checkbox" />
        <p className="task__text">{text}</p>
      </div>
      <div className="task__buttons">
        <button className="task__btn">Editar</button>
        <button onClick={deleteHandler} className="task__btn">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
