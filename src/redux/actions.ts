// redux/actions.ts

import { PDF_INFO } from './actionTypes';

export const dispatchPdfInfo = (pdfInfo: any) => ({
  type: PDF_INFO,
  payload: pdfInfo,
});
