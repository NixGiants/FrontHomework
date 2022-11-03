import React from 'react';

import './css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from './pages/mainPage/MainPage';
import SignInPage from './pages/signinPage/SignInPage';
import PaginationPage from './pages/paginationPage/PaginationPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<SignInPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Pagination" element={<PaginationPage />} />
            /* Default Router */
          <Route path="/" element={<Navigate to="/Login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
