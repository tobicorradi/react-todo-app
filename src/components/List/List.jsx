import React from "react";
import Task from "../Task";
import "./List.css";
const List = ({ tasks }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task text={task.text} />
      ))}
    </ul>
  );
};

export default List;
