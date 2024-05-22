import React, {useState} from 'react'

export default function About(props) {
    
    // const[myStyle,setMyStyle]=useState({
    //     color:'white',
    //     backgroundColor:'black',
    //     border:"1px solid white"
    // })

    let myStyle={
        color:props.mode === 'dark'?'white':'#1e5f83',
        backgroundColor:props.mode==='dark'?'#1e5f83':'white'
    }
    // const [btntext,setBtnText]=useState("Enable light Mode")

    // const ToggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:"black",
    //             border:"1px solid white"

    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:"white",
    //             border:"1px solid white"

    //         })
    //         setBtnText("Enable Dark Mode")

    //     }

    // }
   
  return (
    <div className='container' style={myStyle}>
    <h1 className='my-2'>About us</h1>
      <div className="accordion" id="accordionExample"style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <strong>Analize your text </strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    TextUtils gives you a way to utilize the text quickly and effeciently . Be it words count, character count .
                </div>
                </div>
            </div>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    I am providig a web application like <strong>Text Utiles </strong> which can convert lowercase to uppercase and uppercase to lowercase and convert sentance case, inverse case, alternative case and gives more features. it also provide word count and character count with in  minutes reading .
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatibility</strong>  
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"style={myStyle}>
                    This word counter software works in a web browser such as crome, <strong>firebox, internet Explorer, Safari, Quara etc.</strong> It wants to count characters in facebook, blog, books, excel documents, pdf documents , essays, etc.
                </div>
                </div>
            </div>
        </div>

        {/* this is a button to enable and desable dark mode inside the text form*/}
        {/* <div className="container ">
            <button onClick={ToggleStyle} type="button" className="btn btn-primary" >{btntext}</button>
        </div> */}
    </div>
  )
}
