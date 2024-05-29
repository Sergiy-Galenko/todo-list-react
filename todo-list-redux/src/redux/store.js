import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Імпортуємо thunk не за замовчуванням
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
