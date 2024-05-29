import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './assets/styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
