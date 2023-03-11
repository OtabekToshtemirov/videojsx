import React from 'react';
import arrowUp from '../images/arrow-right.png';
import './works.css';



function Works() {
    return (
        <>
            <section className="works">
                <div className="container">
                    <h1 className="works__title">
                        Works
                    </h1>
                    <h4 className="works__subtitle">
                        Selected Projects
                    </h4>
                    <div className="works__cards">
                        <div className="work__card">
                            <h1 className="work__card__title">
                                Work 1
                            </h1>
                            <p className="work__card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolores et
                                ipsam laudantium libero officia placeat praesentium quaerat sequi.
                            </p>
                            <a href="src/Site#">View Project <img src={arrowUp} alt=""/></a>
                        </div>
                        <div className="work__card">
                            <h1 className="work__card__title">
                                Work 1
                            </h1>
                            <p className="work__card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolores et
                                ipsam laudantium libero officia placeat praesentium quaerat sequi.
                            </p>
                            <a href="src/Site#">View Project <img src={arrowUp} alt=""/></a>
                        </div>
                        <div className="work__card">
                            <h1 className="work__card__title">
                                Work 1
                            </h1>
                            <p className="work__card__description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti dolores et
                                ipsam laudantium libero officia placeat praesentium quaerat sequi.
                            </p>
                            <a href="src/Site#">View Project <img src={arrowUp} alt=""/></a>
                        </div>
                    </div>
                </div>

            </section>


        </>
    );
}

export default Works;