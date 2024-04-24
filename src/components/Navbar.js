import React from 'react';
import {FaBars , FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import "../style/Navbar.css";

 
function Navbar()
{
    const navRef = {useRef};
  
  const ShowNavBar = () =>
  {
    navRef.current.classList.toggle("responsive_nav");
  }


    return(
        <header>
            <h3>Feeding Trends</h3>
            <nav ref={navRef}>
                <a href='/#'>Home </a>
                <a href='/#'>Create Blog </a>
                <a href='/#'>Drafts </a>
                <a href='/#'>My Account </a>

                <button className="nav-btn nav-close-btn" onClick={ShowNavBar}>
                    <FaTimes/>
                </button>

            </nav>

            <button className="nav-btn nav-close-btn" onClick={ShowNavBar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar;