import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Convert to UpperCase clicked.");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleDownClick = () => {
        console.log("Convert to LowerCase clicked.");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")

    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const getVowelCount = (text) => {
        let count = 0;
        try{
            count = text.match(/[aeiou]/gi).length;
        }catch(e){
            count = 0;
        }
        return count;
        
    }

    const showCharacterCount = () => {
        let newText = text.split(/[ ]+/).join(" ").toString().trim();
        return `${newText.length === 0  ? 0 : newText.split(" ").length} words and ${newText.length} characters`
    }

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Clear Extra Space</button>
                <button className="btn btn-outline-info mx-2" onClick={() => setText('')}>Clear Text</button>
            </div>
            <br />
            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>{showCharacterCount()}</p>
                <p>{text.length === 0  ? 0 : (0.008 * text.split(" ").length).toFixed(3)} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text:'Enter something to preview here'}</p>
                <p>{text.length === 0 ? 0 : getVowelCount(text)} vowels</p>
            </div>
        </>
    )
}