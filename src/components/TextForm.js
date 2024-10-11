import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClicked = ()=>{
        console.log("button was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        //setText("You have clicked on handleClicked")
    }
 
    const handleLowClicked = ()=>{
        console.log("button was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        //setText("You have clicked on handleClicked")
    }
    const handleOnChange = (event)=>{
        console.log("On change")
        setText(event.target.value);
    }

    const handleClearText = ()=>{
        setText('');
    }
  
    return (
        <>
    <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className= "btn btn-primary mx-2" onClick={handleUpClicked}>Convert to Uppercase</button>
            <button className= "btn btn-primary mx-2" onClick={handleLowClicked}>Convert to Lowercase</button>
            <button className= "btn btn-primary" onClick={handleClearText}>Clear text</button>
    </div>
    <div className="container my-3">

        {/* my-3 will add spacing*/}

        <h1>Your text summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <p>{text.split('.').length - 1} sentences</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
