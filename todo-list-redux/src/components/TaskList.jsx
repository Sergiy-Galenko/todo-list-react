import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import "./TaskList.css";

const TaskList = () => {
    const tasks = useSelector((state) => state.task.tasks);

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
