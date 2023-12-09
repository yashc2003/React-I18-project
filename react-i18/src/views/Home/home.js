import React, { useInsertionEffect } from 'react';
import './home.css';
import I18n from "../../utils/i18n";

function Home() {
    const usersCount =15;
    const [lang,setLang]= useEffect("mr");
    return (
        <div>
            <h1>{I18n("welcomeMassage")}</h1>

            <p>{I18n("normalMassage")}</p>

            <h3>{I18n("greetingMassage")}</h3>
            <select value={lang} onChange={(e)=>{
                setLang(e.target.value);
            }}>
                <Option value="mr">Marathi</Option>
                <Option value="hi">Hindi</Option>
                <Option value="en">English</Option>
            </select>

            <p>
                {usersCount} users are learning in this session.
            </p>
        </div>
    
        
    );
}


export default Home;