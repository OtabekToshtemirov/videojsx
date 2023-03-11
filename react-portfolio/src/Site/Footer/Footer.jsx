import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import  './footer.css';

function Footer() {
    return (

        <footer className="footer">
            <div className="container">
                <div className="footer__links">
                    <a href="src/Site#">Home</a>
                    <a href="src/Site#">About</a>
                    <a href="src/Site#">Contact</a>
                </div>
                <div className="footer__socials">
                    <FontAwesomeIcon className="social-media__icons" icon={faFacebook} ></FontAwesomeIcon>
                    <FontAwesomeIcon className="social-media__icons" icon={faTwitter} ></FontAwesomeIcon>
                    <FontAwesomeIcon className="social-media__icons" icon={faInstagram} ></FontAwesomeIcon>
                    <FontAwesomeIcon className="social-media__icons" icon={faLinkedin} ></FontAwesomeIcon>
                </div>
            </div>
        </footer>
    );
}

export default Footer;