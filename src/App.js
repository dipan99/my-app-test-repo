import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been disabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Me" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze" />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
