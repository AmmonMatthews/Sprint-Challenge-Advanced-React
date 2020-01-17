import React, {useState} from 'react';
import useDarkMode from '../hooks/useDarkeMode';




 const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode('dark-mode', false)
    
    const dark = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    
    console.log(darkMode);

    

    return(
        <div className="header" data-testid='header'>
            <h2>Womens World Cup</h2>

            <div onClick={dark} className={darkMode ? "dark " : "light"}> Dark/Light</div>
        </div>
    )

}

export default Header