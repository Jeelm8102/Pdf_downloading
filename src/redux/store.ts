// use when want to fetch data from Form.tsx

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;




// // src/redux/store.ts

// import { createStore } from 'redux';
// import rootReducer from './reducers'; // Ensure you have defined your reducers

// const store = createStore(rootReducer);

// export default store;
