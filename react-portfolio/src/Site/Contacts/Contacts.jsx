import React from 'react';
import './contacts.css';

function Contacts() {
    return (
        <>
            <section className="contacts">
                <div className="container">
                    <h1 className="contacts__title">
                        Contact me
                    </h1>
                    <div className="contacts__form">
                        <form action="src/Site">
                            <div className="form__group">
                                <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                        <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Contacts;