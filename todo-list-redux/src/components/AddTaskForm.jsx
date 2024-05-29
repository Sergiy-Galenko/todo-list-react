import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";
import "./AddTaskForm.css";

const AddTaskForm = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), text: task, completed: false }));
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;
