import React from "react";
import './mindfulness.css';
import logo from "./logo.png";

function Header(){
    return(
      <header style={{ borderRadius: 10, marginTop: 0, marginLeft: 0 }}>
        
          <h1 style={{ fontFamily: 'permanent marker', fontWeight: 50, color: 'white' }}>
            &nbsp; Heal Us<img src={logo} height={30} alt="Logo" />
            <span style={{ float: 'right', fontFamily: 'Lucida Sans', fontSize: 'medium', marginTop: 0, marginLeft: 10 }}>
              <button className="a button button4 text-left but">Home</button>
            </span>
          </h1>
          <p style={{ fontFamily: 'Merienda', fontSize: 'larger', textAlign: 'center', justifyItems: 'center', color: 'white' }}>
            &nbsp; &nbsp; &nbsp; It's your battle, but you don't need to fight alone
          </p>
        
      </header>
    );
}

export default Header;