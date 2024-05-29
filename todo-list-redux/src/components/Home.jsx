import React from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <AddTaskForm />
            <TaskList />
        </div>
    );
};

export default Home;
