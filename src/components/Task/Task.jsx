import React from "react";
import "./Task.css";
const Task = ({ text, task, tasks, setTasks }) => {
  const deleteHandler = () => {
    setTasks(tasks.filter((element) => element.id !== task.id));
  };
  const completeTask = () => {
    setTasks(
      tasks.map((element) => {
        if (element.id == task.id) {
          return {
            ...element,
            isCompleted: !element.isCompleted,
          };
        }
        return element;
      })
    );
  };
  return (
    <li className={`task ${task.isCompleted ? "completed" : null}`}>
      <div className="task__main">
        <input
          onClick={completeTask}
          defaultChecked={task.isCompleted}
          className="task__input"
          type="checkbox"
        />
        <p className="task__text">{text}</p>
      </div>
      <div className="task__buttons">
        <button className="edit-btn task__btn">Editar</button>
        <button onClick={deleteHandler} className="task__btn">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
