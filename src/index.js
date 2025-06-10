import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './modules/auth/Loginpage';
import Registorpage from './modules/auth/Registorpage';
import Errorpage from './modules/shares/Errorpage';
import Welcomepage from './modules/dashboard/Welcomepage';
import Profilepage from './modules/dashboard/Profilepage';
import Mainpage from './modules/dashboard/Mainpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage/>}></Route>
        <Route path='registor' element={<Registorpage/>}></Route>
        <Route path='dashboard' element={<Welcomepage/>}></Route>
        <Route path='dashboard/profile' element={<Profilepage/>}>
          <Route path='' element={<Mainpage/>}></Route>
          <Route path='price' element={<Mainpage/>}></Route>

          <Route path='*' element={<Errorpage/>}></Route>
        
        </Route>
          

        <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

