import React from 'react';
import AddTaskForm from '../components/AddTaskForm';
import TaskList from '../components/TaskList';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
