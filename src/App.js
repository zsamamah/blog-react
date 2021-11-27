import React from 'react';
import './App.css';
import './style.css';
import Nav from './Components/Nav';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import Register from './Components/Register';
import Zaid from './Components/Zaid';
import Home from './Components/Home';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Zaid/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
