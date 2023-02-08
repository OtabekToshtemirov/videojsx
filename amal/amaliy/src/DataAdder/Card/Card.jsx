import React from "react";
import './Card.css';

export default function Card({data}) {
    return(
        <>
            {data.map((item)=>{
                const {name, job,id} = item;
                return(
                    <div className='cards'>


                    <div className="card" key={id}>
                        <h1>Username : {name}</h1>
                        <h2>Job : {job}</h2>
                    </div>
                    </div>
                )
            }
            )}

        </>
    )
}