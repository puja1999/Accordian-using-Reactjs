import React, {useState} from 'react'

// function Display(props) // we can also get data using props
function Display({question, answer}) { // destructuring
    const [show, setShow] = useState(false); // for toggle
    return (
        <>
        <div className="content">
            <p onClick={()=> setShow(!show)}> { show? "➖" : "➕"}</p>
        <h1>{question}</h1>
         </div>
         {/* // if show value is true then only display */}
         { show && <p className="ans">{answer}</p>}   
        </>
    )
}

export default Display
