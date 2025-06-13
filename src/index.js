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
import Homepage from './modules/dashboard/components/Homepage';
import Aboutpage from './modules/dashboard/components/Aboutpage';
import Contactpage from './modules/dashboard/components/Contactpage';
import Productlistpage from './modules/dashboard/components/Productlistpage';
import Productdetailspage from './modules/dashboard/components/Productdetailspage';


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
          <Route path='home' element={<Homepage/>}></Route>
          <Route path='about' element={<Aboutpage/>}></Route>
          <Route path='contact' element={<Contactpage/>}></Route>
            <Route path='productlist' element={<Productlistpage/>}></Route>
            <Route path='productlist/detailspage/:id' element={<Productdetailspage/>}></Route>

          <Route path='price' element={<Mainpage/>}></Route>

          <Route path='*' element={<Errorpage/>}></Route>
        
        </Route>
          

        <Route path='*' element={<Errorpage/>}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

