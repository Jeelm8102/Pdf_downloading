// use when want to fetch data from Form.tsx

import { combineReducers } from 'redux';
import { FETCH_DATA } from './actionTypes';

interface DataState {
  data: {
    [key: string]: string;
  };
}

const initialState: DataState = {
  data: {},
};

const dataReducer = (state = initialState, action: any): DataState => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: 'This is the data for ' + action.payload, // Replace this with real data fetching logic
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataState: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;



// // src/redux/reducers.ts

// import { combineReducers } from 'redux';
// import { PDF_INFO } from './actionTypes';

// // Define the initial state for the PDF info
// const initialPdfInfo = {
//   content: '',
//   title: '',
//   filename: '',
//   module: '',
//   strSiteView: '',
// };

// // Define the reducer function for handling PDF_INFO action
// const pdfInfoReducer = (state = initialPdfInfo, action: any) => {
//   switch (action.type) {
//     case PDF_INFO:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // Combine all reducers into a single root reducer
// const rootReducer = combineReducers({
//   pdfInfo: pdfInfoReducer,
//   // Add other reducers here if needed
// });

// export type RootState = ReturnType<typeof rootReducer>;
// export default rootReducer;
