import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../redux/actions";
import "./Task.css";

const Task = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className="task">
            <span>{task.text}</span>
            <button onClick={() => dispatch(removeTask(task.id))}>
                Delete
            </button>
        </div>
    );
};

export default Task;
