import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ForgotPass from 'pages/login_register/ForgotPass';
// import App from './App';
import GetOtp from 'pages/login_register/Get_otp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from 'pages/login_register/Register';
// import Test from './partials/Test'; // file test component
// import Home from 'pages/home/Home';
// import Login from 'pages/login_register/Login';
import UpdatePass from 'pages/login_register/UpdatePass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <Test/> */}
     <App></App>
     {/* <Home></Home> */}
  </React.StrictMode>
     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
