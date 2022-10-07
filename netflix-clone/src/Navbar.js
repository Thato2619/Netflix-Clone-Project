import React, { useEffect } from 'react'
import "./Navbar.css"

//add scroll listner so that it listens to scroll
function Navbar(){
    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        }
    }, [])
}

function Navbar() {
    return (
    <div className= "nav">
        
        <img 
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
        />
        <img
            className='nav_avator'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avator"
        />

    </div>
    )
}

export default Navbar