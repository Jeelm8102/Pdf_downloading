// src/components/PdfExport.tsx

import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { RootState } from '../redux/reducers';
import { dispatchPdfInfo } from '../redux/actions';
import externalData from '../data';

interface PdfExportProps {
  content: string; // Adjust type as per your content type
  title: string;
  filename: string;
  module: string;
  strSiteView: string;
  dispatchpdfInfo: (pdfInfo: any) => void;
}

const PdfExport: React.FC<PdfExportProps> = ({ content, title, filename, module, strSiteView, dispatchpdfInfo }) => {
  const generatePDF = () => {
    const input = document.getElementById('pdf-content');
    if (input !== null) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 size page width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height based on aspect ratio
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${filename}.pdf`);
      });
    }
  };

  const getLogoUrl = (strSiteView: string) => {
    // Replace with logic to get logo URL based on strSiteView
    return ''; // Example: '/path/to/logo.png'
  };

  const utc_time = new Date().toUTCString();
  const logo_url = getLogoUrl(strSiteView);

  return (
    <div>
      <div id="pdf-content">
        <table className="pdf-table">
          <tbody>
            <tr>
              <td width="75%" height="25" style={{ height: '25px' }} align="left" colSpan={3}>
                <img src={logo_url} alt="Logo" />
              </td>
              <td width="25%" height="25" style={{ height: '25px' }} align="right">
                {utc_time}
              </td>
            </tr>
            <tr>
              <td width="100%" colSpan={4} align="center" className="title-cell">
                <hr className="title-hr" />
                <u>{externalData.title}</u>
              </td>
            </tr>
            <tr>
              <td width="100%" colSpan={4} align="center" className="content-cell">
                <br />
                {externalData.content}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchpdfInfo: (pdfInfo: any) => dispatch(dispatchPdfInfo(pdfInfo)),
});

export default connect(null, mapDispatchToProps)(PdfExport);
