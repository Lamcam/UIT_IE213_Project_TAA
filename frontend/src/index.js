import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ForgotPass from 'pages/LoginRegister/ForgotPass';
import App from './App';
// import GetOtp from 'pages/LoginRegister/Get_otp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from 'pages/login_register/Register';
// import Test from './partials/Test'; // file test component
// import Home from 'pages/home/Home';
// import Login from 'pages/login_register/Login';
import UpdatePass from 'pages/LoginRegister/UpdatePass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App></App>
     {/* <Home></Home> */}
     {/* <Register></Register> */}
     {/* <ForgotPass></ForgotPass> */}
     {/* <GetOtp></GetOtp> */}
     {/* <Login></Login> */}
     {/* <UpdatePass></UpdatePass> */}
  </React.StrictMode>
     
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
