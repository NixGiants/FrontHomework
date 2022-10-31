import React from 'react';

import './css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import MainPage from './pages/mainPage/MainPage';
import MainPage from './pages/mainPage/SignInPage';

function App() {
  return (
    <div className="App">
       <SignInPage/>
    </div>
  );
}

export default App;
