import React from 'react';

function Game({question, onClickVariant,step,wiz}) {
    return (
        <div className={"game"}>
            <div className="progress">
                <div className="progress__bar" style={{width: `${step*100/wiz.length}%`}}></div>
            </div>
            <h1 className={"game__title"}>{question.title}</h1>
            <ul className={"ulList"}>
                {question.variants.map((variant,index)=>(
                    <li key={index} className={"list"} onClick={() => onClickVariant(index)}>{variant}</li>
                    )
                )}
            </ul>

        </div>

    );

}



export default Game;