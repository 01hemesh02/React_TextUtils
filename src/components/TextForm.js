import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () => {

        let newText = text.toUpperCase();

        setText(newText);

        props.showAlert("Converted into UpperCase","success");

    }

    const handleLowClick = () => {

        let newText = text.toLowerCase();

        setText(newText);

        props.showAlert("Converted into LowerCase","success");

    }
 
    const handleClearClick = () => {

        let newText = ' ';

        setText(newText);

        props.showAlert("Clear All text","success");
    }

    const handleCopy = () =>{

        var text = document.getElementById("myBox");

        text.select();

        navigator.clipboard.writeText(text.value)

        props.showAlert("Copied","success");
    }

    const handleOnChange = (event) =>{

        setText(event.target.value);

    }

    const [text,setText] = useState('');
    // text = "new Text"; // Wrong way to change the state

    // setText("new text"); // Correct way to change the state

    return (

        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>

                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
                </div>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                {/* <button className="btn btn-primary mx-1" onClick={handleTranslation}>Translate</button> */}

            </div>

            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>

                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}