import React, { useState } from 'react';
import { questions } from './Api';
import './accordian.css';
import Display from './Display';

function Accordian() {

    // to loop through array of an object, we define one state variable
    const [ data, setData ] = useState(questions); // all datas from api have come into data variable now
    return (
        <>
        <div className="container">
            <h1>React Interview Questions</h1>
            {
                data.map((items) =>{
                    const { id } = items;
                    return <Display key={id} {...items} />
                })
            }
            </div>
        </>
    )
}

export default Accordian
