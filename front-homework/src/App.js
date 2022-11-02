import React from 'react';

import './css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import MainPage from './pages/mainPage/MainPage';
import SignInPage from './pages/signinPage/SignInPage';
import PaginationPage from './pages/paginationPage/PaginationPage';

function App() {
  return (
    <div className="App">
       <PaginationPage/>
    </div>
  );
}

export default App;
