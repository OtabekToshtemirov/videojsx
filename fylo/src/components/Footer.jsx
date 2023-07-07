import {useState} from 'react';
import logo from '../../public/images/logo.svg';
import phone from '../../public/images/icon-phone.svg';
import iconMail from '../../public/images/icon-email.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'





const Footer = () => {
    const [email, setEmail] = useState('');
    const [valid, setValid] = useState(false);

    const validateEmail = (e) => {
        setEmail(e.target.value);
        const regex = /\S+@\S+\.\S+/;
        if (regex.test(e.target.value)) {
            setValid(true);
        } else {
            setValid(false);
        }
        console.log(valid)
    }

    return (
        <footer className="footer">
            <div className="footer-join__bg">
                <div className="container">
                    <div className="footer-join">
                        <div className="footer-join__text">
                            <h2>Get early access today
                            </h2>
                            <p>
                                It only takes a minute to sign up and our free starter tier is extremely generous. If
                                you have any questions, our support team would be happy to help you.
                            </p>
                        </div>

                        <div className="footer-input">
                            <input type="text" placeholder="Enter your email address" onChange={validateEmail}/>
                            <button className="btn" disabled={!valid}>Join</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-main__content">
                        <div className="footer-main__logo">
                            <a href="#">
                                <img src={logo} alt=""/>
                            </a>
                        </div>
                        <div className="footer-main__menu">
                            <div className="contacts">
                                <div className="phone">
                                    <img src={phone} alt=""/>
                                    <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
                                </div>
                                <div className="email">
                                    <img src={iconMail} alt=""/>
                                    <a href="mailto:example@mai.com">
                                        example@fylo.com
                                    </a>
                                </div>
                            </div>
                            <div className="links">
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="links">
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                            <div className="social">
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default Footer