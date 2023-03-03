import React,{useState} from 'react';
import {Questions} from "./questions";
import Game from "./Game";
import "./Quiz.css";
import Result from "./Result";

function Quiz() {
    const [step,setStep]=useState(0);
    const questions=Questions[step];
    const [point,setPoint]=useState(0);

    const  onClickVariant = (index) => {
        setStep(step+1);
        if (index===questions.correct){
            setPoint(point+1);
        }

    }
    return (
        <div className={"App"}>
            {
                step!==Questions.length ? <Game step={step} question={questions} onClickVariant={onClickVariant} wiz={Questions}/> : <Result point = {point} wiz={Questions}/>
            }

        </div>
    );
}

export default Quiz;