import React from "react";
import logo from '../imgs/logo-dinoco.png'

function LogoDinoco(){
    return(
        <div className='container-logo'>
        <img 
        className='logo'
        src={logo}
        alt='Logo calculadora'
        />
      </div>
    );
}

export default LogoDinoco;