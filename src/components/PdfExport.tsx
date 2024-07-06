import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { RootState } from '../redux/reducers';
import { dispatchPdfInfo } from '../redux/actions';

interface PdfExportProps {
  title: string;
  filename: string;
  module: string;
  strSiteView: string;
  dispatchpdfInfo: (pdfInfo: any) => void;
}

const PdfExport: React.FC<PdfExportProps> = ({ title, filename, module, strSiteView, dispatchpdfInfo }) => {
  const [dynamicContent, setDynamicContent] = useState('Loading...');

  useEffect(() => {
    // Simulate fetching real-time data
    setTimeout(() => {
      setDynamicContent('Real-time content loaded');
    }, 2000);
  }, []);

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

  // Fill the template with real-time data
  const content = fillTemplate(sampleHTMLTemplate, {
    logo_url,
    utc_time,
    title,
    content: dynamicContent
  });

  return (
    <div>
      <div id="pdf-content" dangerouslySetInnerHTML={{ __html: content }} />
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatchpdfInfo: (pdfInfo: any) => dispatch(dispatchPdfInfo(pdfInfo)),
});

export default connect(null, mapDispatchToProps)(PdfExport);

// Function to Replace Placeholders with Real-Time Data

const fillTemplate = (template: string, data: { [key: string]: string }) => {
  return template.replace(/{{(.*?)}}/g, (_, key) => data[key] || '');
};

const sampleHTMLTemplate = `
<head>
    <link type="text/css" rel="stylesheet" media="all" />
</head>
<body>
    <div id="pdf-content">
        <table style="width: 100%; border-collapse: collapse;">
            <tbody>
                <tr>
                    <td width="75%" height="25" style="height: 25px;" align="left" colSpan="3">
                        <img src="{{logo_url}}" alt="Honeywell" />
                    </td>
                    <td width="25%" height="25" style="height: 25px;" align="right">
                        {{utc_time}}
                    </td>
                </tr>
                <tr>
                    <td width="75%" height="15" style="height: 15px;" colSpan="4" align="center">
                        <hr style="border: 3px solid black;" />
                        <u>{{title}}</u>
                    </td>
                </tr>
                <tr>
                    <td width="100%" colSpan="4" align="center"><br />{{content}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
`;





// used to pass html file as a prop as an data

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { RootState } from '../redux/reducers';
// import { dispatchPdfInfo } from '../redux/actions';
// import externalData from '../data';

// interface PdfExportProps {
//   content: string; // HTML content as a string
//   title: string;
//   filename: string;
//   module: string;
//   strSiteView: string;
//   dispatchpdfInfo: (pdfInfo: any) => void;
// }

// const PdfExport: React.FC<PdfExportProps> = ({ content, title, filename, module, strSiteView, dispatchpdfInfo }) => {
//   useEffect(() => {
//     // Dynamically inject styles if they are included in the content
//     const style = document.createElement('style');
//     style.innerHTML = `
//       /* Add your global CSS here if any */
//     `;
//     document.head.appendChild(style);
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   const generatePDF = () => {
//     const input = document.getElementById('pdf-content');
//     if (input !== null) {
//       html2canvas(input).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         const imgWidth = 210; // A4 size page width in mm
//         const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height based on aspect ratio
//         pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//         pdf.save(`${filename}.pdf`);
//       });
//     }
//   };

//   const getLogoUrl = (strSiteView: string) => {
//     // Replace with logic to get logo URL based on strSiteView
//     return ''; // Example: '/path/to/logo.png'
//   };

//   const utc_time = new Date().toUTCString();
//   const logo_url = getLogoUrl(strSiteView);

//   return (
//     <div>
//       <div id="pdf-content" dangerouslySetInnerHTML={{ __html: content }} />
//       <button onClick={generatePDF}>Generate PDF</button>
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   dispatchpdfInfo: (pdfInfo: any) => dispatch(dispatchPdfInfo(pdfInfo)),
// });

// export default connect(null, mapDispatchToProps)(PdfExport);




// 1] use this to pass data individually as props

// // src/components/PdfExport.tsx

// import React from 'react';
// import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
// import { RootState } from '../redux/reducers';
// import { dispatchPdfInfo } from '../redux/actions';
// import externalData from '../data';

// interface PdfExportProps {
//   content: string; // Adjust type as per your content type
//   title: string;
//   filename: string;
//   module: string;
//   strSiteView: string;
//   dispatchpdfInfo: (pdfInfo: any) => void;
// }

// const PdfExport: React.FC<PdfExportProps> = ({ content, title, filename, module, strSiteView, dispatchpdfInfo }) => {
//   const generatePDF = () => {
//     const input = document.getElementById('pdf-content');
//     if (input !== null) {
//       html2canvas(input).then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         const imgWidth = 210; // A4 size page width in mm
//         const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height based on aspect ratio
//         pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
//         pdf.save(`${filename}.pdf`);
//       });
//     }
//   };

//   const getLogoUrl = (strSiteView: string) => {
//     // Replace with logic to get logo URL based on strSiteView
//     return ''; // Example: '/path/to/logo.png'
//   };

//   const utc_time = new Date().toUTCString();
//   const logo_url = getLogoUrl(strSiteView);

//   return (
//     <div>
//       <div id="pdf-content">
//         <table className="pdf-table">
//           <tbody>
//             <tr>
//               <td width="75%" height="25" style={{ height: '25px' }} align="left" colSpan={3}>
//                 <img src={logo_url} alt="Logo" />
//               </td>
//               <td width="25%" height="25" style={{ height: '25px' }} align="right">
//                 {utc_time}
//               </td>
//             </tr>
//             <tr>
//               <td width="100%" colSpan={4} align="center" className="title-cell">
//                 <hr className="title-hr" />
//                 <u>{externalData.title}</u>
//               </td>
//             </tr>
//             <tr>
//               <td width="100%" colSpan={4} align="center" className="content-cell">
//                 <br />
//                 {externalData.content}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <button onClick={generatePDF}>Generate PDF</button>
//     </div>
//   );
// };

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   dispatchpdfInfo: (pdfInfo: any) => dispatch(dispatchPdfInfo(pdfInfo)),
// });

// export default connect(null, mapDispatchToProps)(PdfExport);
