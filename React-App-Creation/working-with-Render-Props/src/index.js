import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App , About, Login, Services, History } from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route 
        path='/' 
        element = {<App/>}
      />
      <Route
        path='/about' 
        element = {<About/>}>
        <Route path='history'
                element = {<History/>}/>
      </Route> 
      <Route 
        path='/login'
        element = {<Login/>}
      />
      <Route 
        path='/services'
        element = {<Services/>}
      />
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
