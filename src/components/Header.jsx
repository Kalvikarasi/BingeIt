import React from "react";
import "./Header.css";

function Header (){
    return (
        <header onClick={()=>window.scroll(0,0)}>
            <h1>BingeIt</h1>
        </header>
    );

}

export default Header;
