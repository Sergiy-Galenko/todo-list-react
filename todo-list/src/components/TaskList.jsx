import React from 'react';
import useTasks from '../hooks/useTasks';
import Task from './Task';
import './TaskList.css';

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
