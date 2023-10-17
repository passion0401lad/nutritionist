import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { PATH } from 'consts';
// import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { store } from 'store';
import { FooterPage, HeaderPage, NotFoundPage , NutritionistPage } from 'pages';

function App() {
  return (
    // <Provider store={store}>
    <BrowserRouter>
    <div className="h-[100vh] flex flex-col bg-[#FAFDF2]">
    <HeaderPage />
        <Routes>
          <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
          <Route path={PATH.DASHBOARD} element={<NutritionistPage />} />
        </Routes>
        <FooterPage />
      </div>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
