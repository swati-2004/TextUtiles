import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import  TextForm from './components/TextForm';
import Alert from './components/Alert';
// import  react router dom---
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light'); // show that whether dark mode is enabled or not

  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
        setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);

      },1500);
  }
  
  
  
  // const toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor ='#202e48';
  //     showAlert("Dark mode has been enabled","success")
  //     document.title="TextUtils - Dark Mode";

  //     // this is for in the title to show ----------------------------------------
  //     // setInterval(()=>{
  //     //   document.title='TextUtils is Amazing Mode';
  //     // },2000)

  //     // setInterval(()=>{
  //     //   document.title=' Install TextUtils Now';
  //     // },1500)
    
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor ='white';
  //     showAlert("Light mode has been enabled","success")
  //     document.title="TextUtils - Light Mode";
  //   }
  // }


// this is for changing color
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
}
  const toggleMode=(cls)=>{
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#202e48';
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils - Dark Mode";

      // this is for in the title to show ----------------------------------------
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000)

      // setInterval(()=>{
      //   document.title=' Install TextUtils Now';
      // },1500)
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils - Light Mode";
    }
  }
  return ( 

     <>
    <Navbar title="TexUtils" mode ={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
     <Router>
        <Routes>
          <Route path="/about" element={<About mode ={mode}/>}/> 
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtiles - Word Counter, Character Counter" mode ={mode}/>}/> 

          {/* agr router hata diya jaaye to--------------- */}
          
        {/* <div className="container "> */}
         {/* <TextForm showAlert={showAlert} heading="Enter The Text To Utilize Below " mode ={mode}/>  */}
        {/* </div> */}
        </Routes>

     </Router>
    </>
     
  );
}

export default App;





