import React from 'react';
import './contacts.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMailReply} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";

function Contacts() {
    return (
        <>


                <div className="container">
                    <section className="contacts">
                    <h1 className="contacts__title">
                        Contacts
                    </h1>
                    <h4 className="contacts__subtitle">
                        Get in touch
                    </h4>
                    <div className="contacts__phone">
                        <div className="contacts__phone__icon">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </div>
                        <div className="contacts__phone__number">
                            <a href="tel:+998332280498">+998332280498</a>
                        </div>
                    </div>
                    <div className="contacts__email">
                        <div className="contacts__email__icon">

                            <FontAwesomeIcon icon={faMailReply}></FontAwesomeIcon>
                        </div>
                        <div className="contacts__email__address">
                            <a href="mailto:shoraqorgon@gmail.com">Shoraqorgon@gmail.com</a>
                        </div>
                    </div>
                    <div className="contacts__address">
                        <div className="contacts__address__icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contacts__address__text">
                            <p>Uzbekistan, Tashkent</p>
                        </div>
                    </div>
                    </section>
                </div>


        </>
    );
}

export default Contacts;