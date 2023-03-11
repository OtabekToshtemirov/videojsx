import React from 'react';
import Header from "./Header/Header.jsx";
import Works from "./Works/Works.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import Footer from "./Footer/Footer.jsx";
import './style.css';
import Navigation from "./Navigation/Navigation.jsx";

function Site() {
    return (
        <>
            <Navigation/>
            <Header/>
            <Works/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default Site;