import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert'

import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below..." mode={mode} />
        {/* <About/> */}
        {/* <Routes>
            <Route path="/about">
               <About/>
            </Route>
            <Route path="/">
               <TextForm showAlert={showAlert} heading="Enter the text to analyze below..." mode={mode}/>
            </Route>
      </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
