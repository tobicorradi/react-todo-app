import React from "react";
import Task from "../Task";
import "./List.css";
const List = ({ tasks, setTasks }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </ul>
  );
};

export default List;
