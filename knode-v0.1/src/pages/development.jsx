import React from 'react'
import logo from '../images/nobgLogo.png'

function development() {
    return (
    <div className='background'>
      <img className='logo' src={logo} alt="logo" />
      <div style={{color: "white", fontSize: "2em"}}>Currently In Development</div>
    </div>
    )
}

export default development
