// src/redux/store.ts

import { createStore } from 'redux';
import rootReducer from './reducers'; // Ensure you have defined your reducers

const store = createStore(rootReducer);

export default store;
