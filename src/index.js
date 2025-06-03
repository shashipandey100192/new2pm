import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc,{About1, About2, Mypage} from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc/>
    <About1/>
    <About2/>
    <Mypage/>

  </React.StrictMode>
);

