import React from "react";
import '../styles/buttonClear.css'

const ButtonClear = ({children, clearInput}) => (
    <div 
    className="button-clear" 
    onClick={clearInput} >
    {children}
    </div>
) 

export default ButtonClear;