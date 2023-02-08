import React ,{useState}from 'react';
import  './counter.css';

const Counter = () => {
    const [number,setNumber]=useState(0);
    const onClickPlus = () => {
        setNumber(number+1);
    }
    const onClickMinus = () => {
      setNumber(number-1);
    }
    const reset = () => {
        setNumber(0);
    }
    return (
        <div className="card">
            <h1>Counter</h1>

            <h1>{number}</h1>
            <div className="buttons">
                <button className="plus" onClick={onClickPlus}>Increment</button>
                <button className={"minus"} onClick={onClickMinus}>Decrement</button>
                <button className={"reset"} onClick={reset}> Reset</button>
            </div>


        </div>
    );
};

export default Counter;