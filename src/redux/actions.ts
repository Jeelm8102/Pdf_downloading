// fetch data from form.tsx
import { FETCH_DATA } from './actionTypes';

export const fetchData = (dataId: string) => ({
  type: FETCH_DATA,
  payload: dataId,
});


// // redux/actions.ts

// import { PDF_INFO } from './actionTypes';

// export const dispatchPdfInfo = (pdfInfo: any) => ({
//   type: PDF_INFO,
//   payload: pdfInfo,
// });
