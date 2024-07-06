import React from 'react';
import { Provider } from 'react-redux';
import PdfExport from './components/PdfExport';
import Form from './components/Form';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <PdfExport
          title="Dynamic Title"
          filename="dynamic"
          module="sample"
          strSiteView="sample"
        />
      </div>
    </Provider>
  );
};

export default App;



// 3] suse this to pass whole html file as a prop with real-time data

// import React from 'react';
// import { Provider } from 'react-redux';
// import PdfExport from './components/PdfExport';
// import store from './redux/store'; // Ensure you have a configured Redux store

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <PdfExport
//           title="Dynamic Title"
//           filename="dynamic"
//           module="sample"
//           strSiteView="sample"
//         />
//       </div>
//     </Provider>
//   );
// };

// export default App;




// 2] passing whole html but no real-time data

// import React from 'react';
// import { Provider } from 'react-redux';
// import PdfExport from './components/PdfExport';
// import store from './redux/store'; // Ensure you have a configured Redux store

// const sampleHTMLContent = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//         {/* <link type="text/css" href={css_url} rel="stylesheet" media="all" /> */}
//         <link type="text/css" rel="stylesheet" media="all" />
//       </head>
//       <body>
//         <div id="pdf-content">
//           <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//             <tbody>
//               <tr>
//                 <td width="75%" height="25" style={{ height: '25px' }} align="left" colSpan={3}>
//                   <img src={logo_url} alt="Honeywell" />
//                 </td>
//                 <td width="25%" height="25" style={{ height: '25px' }} align="right">
//                   {utc_time}
//                 </td>
//               </tr>
//               <tr>
//                 <td width="75%" height="15" style={{ height: '15px' }} colSpan={4} align="center">
//                   <hr style={{ border: '3px solid black' }} />
//                   <u>{title}</u>
//                 </td>
//               </tr>
//               <tr>
//                 <td width="100%" colSpan={4} align="center"><br />{content}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </body>
// </html>
// `;

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <PdfExport
//           content={sampleHTMLContent}
//           title="Sample Title"
//           filename="sample"
//           module="sample"
//           strSiteView="sample"
//         />
//       </div>
//     </Provider>
//   );
// };

// export default App;




// 1] Use this to pass data individually through props


// // src/App.tsx

// import React from 'react';
// import { Provider } from 'react-redux';
// import PdfExport from './components/PdfExport';
// import store from './redux/store'; // Ensure you have a configured Redux store

// const App: React.FC = () => {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <PdfExport content="Sample content" title="Sample Title" filename="sample" module="sample" strSiteView="sample" />
//       </div>
//     </Provider>
//   );
// };

// export default App;
