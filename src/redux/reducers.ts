// src/redux/reducers.ts

import { combineReducers } from 'redux';
import { PDF_INFO } from './actionTypes';

// Define the initial state for the PDF info
const initialPdfInfo = {
  content: '',
  title: '',
  filename: '',
  module: '',
  strSiteView: '',
};

// Define the reducer function for handling PDF_INFO action
const pdfInfoReducer = (state = initialPdfInfo, action: any) => {
  switch (action.type) {
    case PDF_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  pdfInfo: pdfInfoReducer,
  // Add other reducers here if needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
