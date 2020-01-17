import React, {useState} from 'react';
import useDarkMode from '../hooks/useDarkeMode';




 const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode('dark-mode', false)
    
    const dark = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    

    return(
        <div className="header" data-testid='header'>
            <h2>Womens World Cup</h2>
            
            <p onClick={dark} className={darkMode ? "dark button" : "button light"}> Dark/Light</p>
            
            
        </div>
    )

}

export default Header