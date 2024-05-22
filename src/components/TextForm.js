import React,{useState} from 'react'

  // Function to convert text to upper Case
export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to Upper Case","success")
  }

    // Function to convert text to lower Case
  const handleLowClick = ()=>{
    console.log("Lowercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert(" Converted to Lower Case","success")

  }


  // Function to convert text to Sentence Case
const handleSentenceClick = () => {
  let newText = text.replace(/^.|\.\s*\w/g, (c) => c.toUpperCase());
  setText(newText);
  props.showAlert(" Converted to Sentance Case","success")

};

// Function to convert text to Capitalized Case
const handleCapitilizedClick = () => {
  let newText = text.toLowerCase().replace(/^.|\s\S/g, (a) => a.toUpperCase());
  setText(newText);
  props.showAlert(" Converted to Capitilized Case","success")

};

// Function to convert text to Alternating Case
const handleaLtErNaTiNgClick = () => {
  let newText = text
    .split("")
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join("");
  setText(newText);
  props.showAlert(" Converted to aLtErNaTiNg Case","success")

};

// Function to download text
const handleDownloadClick = () => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = "text.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
  props.showAlert(" Downloaded Text","success")

};
// Function to convert text to Title Case
const handleTitleClick = () => {
  let newText = text.toLowerCase().split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
  setText(newText);
  props.showAlert(" Converted to Title Case","success")

};

// Function to convert text to Inverse Case
const handleInverseClick = () => {
  let newText = text.split('').map((char) => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join('');
  setText(newText);
  props.showAlert(" Converted to Inverse Case","success")

};




  // // to here
  const handleCopyClick = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(" Copy to clipboard","success")

  }
  const handlClearClick = ()=>{
    let newText = ("");
    setText(newText)
    props.showAlert(" Clear text","success")

  }

  const handleOnChange = (event)=>{
    console.log("Onchnage")
    setText(event.target.value);
  }


  // ***************hooks
  const [text,setText] = useState('');
  // ***********************setText("new text");  //correct way to change the text 
  return (
    <>
    <div className='container1 mx-5 my-5 ' style={{color:props.mode==='dark'?'white':'black'}}> 
    <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-2">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'rgb(57 84 135)':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="5"></textarea>
        </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Upper case</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleLowClick}>Lower case</button>
      <button className="btn btn-primary"  onClick={handleSentenceClick}>Sentence case</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleCapitilizedClick}>Capitilized</button>
      <button className="btn btn-primary"  onClick={handleaLtErNaTiNgClick}>aLtErNaTiNg</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleTitleClick}>Title case</button>
      <button className="btn btn-primary"  onClick={handleInverseClick}>Inverse case</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleDownloadClick}>Download Text</button>
      <button className="btn btn-primary"  onClick={handleCopyClick}>Copy text</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handlClearClick}>Clear Text</button> 


    </div>
    <div className="container2 mx-5 my-3"style={{color:props.mode==='dark'?'white':'black'}}>
      <h4>your text summery</h4>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

      <h3>preview</h3>
      <p>{text.length>0?text:"Enter somthing in the text box to preview here"}</p>
    </div>
    </>
  )
}
