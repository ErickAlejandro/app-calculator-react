import React from "react";
import '../styles/button.css'

function Button({children, driveClick}){

    const isOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=');
    };

    return(
        <div
        className={`button-container ${isOperator(children) ? 'operator' : 'number'}`}
        onClick={() => driveClick(children)}>
            {children}
        </div>
    )
}

export default Button;