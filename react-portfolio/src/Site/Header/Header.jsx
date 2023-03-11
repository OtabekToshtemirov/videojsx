
import heading from '../images/Headimg.png';
import greenCircle from '../images/greenCircle.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";

function Header() {

    return (
        <header className="header">


                    <div className="container">
                        <main className="about-section">
                            <div className="about-section__text">
                                <h1 className="about-section__title">
                                    Hi, I'm Otabek
                                </h1>
                                <img className="green-circle" src={greenCircle} alt=""/>
                                    <p className="about-section__description">
                                        I’m a Junior Frontend developer. I am always looking for new opportunities to
                                        learn and grow. I am passionate about web development and I love to create new things. I am a fast learner and always ready to take on new challenges.
                                    </p>
                                    <div className="social__links">
                                        <a href="src/Site#">Resume <FontAwesomeIcon icon={faArrowUpRightDots} /></a>
                                        <a href="src/Site#">LinkedIn <FontAwesomeIcon icon={faArrowUpRightDots} /></a>
                                        <a href="src/Site#">Telegram <FontAwesomeIcon icon={faArrowUpRightDots} /></a>
                                    </div>

                            </div>
                            <div className="about-section__image">
                                <img src={heading} alt=""/>
                            </div>

                        </main>
                    </div>
                </header>

    );

}

export default Header;