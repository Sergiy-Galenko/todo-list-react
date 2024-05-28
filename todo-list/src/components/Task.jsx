import React from 'react';
import useTasks from '../hooks/useTasks';
import './Task.css';

const Task = ({ task }) => {
  const { removeTask } = useTasks();

  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
