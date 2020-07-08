import React from "react";

// import "../css/style.css";

const Button = ({ symbol, cols, action }) => {
    return(
        <div className={`column-${cols}`}>
            <button className="calc-button" onClick={() => action(symbol)}>{ symbol === "*" ? "X" : symbol}</button>
        </div>
    );
}

export default Button;