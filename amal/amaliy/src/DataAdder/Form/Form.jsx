import React from "react";
import './Form.css';

const Form = ({addNewPeople, newPeople, setNewPeople, CatchData})=>{
    return(
        <>
        {/*    Create form  with button submit Name and job*/}
        <form className='form'>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                placeholder="Name"
                value={newPeople.name}
            onChange={CatchData}/>
            <label htmlFor="job">Job</label>
            <input type="text"
                   placeholder="Job"
                    value={newPeople.job}
                    onChange={CatchData}/>
            <button type="submit">Submit</button>
        </form>

        </>
    )

}

export default Form;
