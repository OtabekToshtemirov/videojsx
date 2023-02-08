import React from 'react';
import img from "../ModalWindow/img.png";
function Result({point,wiz}) {
    return (
        <div className={"game"}>
            <h1>Quiz is over</h1>
            <img src={img} alt="img"/>
            <h1>Your correct answers is {point} of {wiz.length} </h1>
            <a href="/">
            <button className={'btn'} >Try again</button>
            </a>
        </div>
    );
}

export default Result;