// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import PdfExport from './components/PdfExport';
import store from './redux/store'; // Ensure you have a configured Redux store

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PdfExport content="Sample content" title="Sample Title" filename="sample" module="sample" strSiteView="sample" />
      </div>
    </Provider>
  );
};

export default App;
