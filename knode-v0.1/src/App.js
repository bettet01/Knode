import React from 'react';
import './App.css';
import logo from './logo.png'
import Particles from 'react-particles-js';

function App() {
  return (
    <div className='test'>
      <Particles />
      <img className='logo' src={logo} alt="logo" />
    </div>
  );
}

export default App;
