import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upperCase","success")
  }
  const handleLowClick = ()=>{
    console.log("Lowercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowerCase","success")

  }


  const handleSentenceClick = ()=>{
    let newText = text.toSentenceCase();
    setText(newText)
  }
  const handleCapitilizedClick = ()=>{
    let newText = text.toCapotilizedCase();
    setText(newText)
  }
  const handleaLtErNaTiNgClick = ()=>{
    let newText = text.toaLtErNaTiNgCase();
    setText(newText)
  }
  const handleTitleClick = ()=>{
    let newText = ("");
    setText(newText)
  }
  const handleDownloadClick = ()=>{
    let newText = ("");
    setText(newText)
  }
  const handleInverseClick = ()=>{
    let newText = ("");
    setText(newText)
  }
  const handleCopyClick = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copy to clipboard","success")

  }
  const handlClearClick = ()=>{
    let newText = ("");
    setText(newText)
    props.showAlert("clear text","success")

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
