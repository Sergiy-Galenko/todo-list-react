import React from 'react';
import { TaskProvider } from './context/TaskContext';
import Header from './components/Header';
import Home from './pages/Home';
import './assets/styles/App.css';

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <Home />
      </div>
    </TaskProvider>
  );
};

export default App;
