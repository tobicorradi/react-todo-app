import React from "react";
import "./Task.css";
const Task = ({ text }) => {
  return (
    <li className="task">
      <div className="task__main">
        <input className="task__input" type="checkbox" />
        <p className="task__text">{text}</p>
      </div>
      <div className="task__buttons">
        <button className="task__btn">Editar</button>
        <button className="task__btn">Eliminar</button>
      </div>
    </li>
  );
};

export default Task;