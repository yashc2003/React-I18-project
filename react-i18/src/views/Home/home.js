import React from 'react';
import './home.css';


function Home() {
    const users = 15;

    return (
    
             <div className="language-con">  
            <h1 className="main-heading">{I18n("welcomemessage")}</h1>
            <p className="normal-text">{I18n("normalmessage")}</p>
            <h3 className="sub-heading">{I18n("greetingmessage")}</h3>


            <div className="language-container">
           
        <select
          className="language-select"
          defaultValue={localStorage.getItem("lang")}
          onChange={(e) => {
            localStorage.setItem("lang", e.target.value);
            window.location.reload();
          }}
        >
          
          <option value="mr" className="marathi-option">Marathi</option>
          <option value="hi" className="hindi-option">Hindi</option>
          <option value="en" className="english-option">English</option>
          
        </select>
      </div>
      </div>
    );
}


export default Home;