import React from 'react';
import logo from "../images/otlogo.jpg";
import moon from "../images/nightModeIcon.png";
import sun from "../images/LightModeIcon.png";
import  "./navigation.css";

function Navigation() {
    return (
        <>
            <div className="container">
                <nav className="navbar">
                    <div className="logo">
                        <a href="index.html">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="menu-link">
                                <a className="menu__link__a" href="index.html">Home</a>
                            </li>
                            <li className="menu-link"><a className="menu__link__a" href="src/Site#">About</a></li>
                            <li className="menu-link"><a className="menu__link__a" href="src/Site#">Contact</a>
                            </li>
                            <li className="resume-link"><a href="src/Site#">My Resume</a></li>
                        </ul>

                        <div className="mode">

                            <a className="night-mode">
                                <img src={moon} alt="moon" />
                            </a>
                            <a className="day-mode">
                                <img src={sun} alt="sun"/>
                            </a>
                        </div>

                    </div>

                </nav>
            </div>
            <div className="horizonal-line">
                <hr/>
            </div>
        </>
    );
}

export default Navigation;