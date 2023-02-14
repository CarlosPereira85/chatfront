import { Container, Segment } from "semantic-ui-react";

import MyContext from "../context/MyContext";

import React, { useContext } from "react";
import Dictaphone1 from "./Dictaphone1";
import { useSpeechRecognition } from "react-speech-recognition";
import Language from "./Language";






const Text =  () => {
  const { transcript, message } = useSpeechRecognition ();
  
  const {setText, response} = useContext (MyContext)
  

  return (
    <>
    <h1 style={{textAlign:"center"}}>Speaking & Listening ChatGPT</h1>
    <div style={{textAlign:"center"}}>
    <Language  />
    </div>
    <div className="box">
      
   <div className="me">
    
   <h1>YOU</h1>
   <div className="me_box" >
   
      {transcript}
      
      </div>
      </div>
    <Container >
      <Segment >
        <h1>AI</h1>
    
      <textarea  className="textAreaStyle" value={response} onChange={(e)=>{setText(e.target.value)}}>   </textarea>
       
     
      
      </Segment>
      </Container>
      </div>
 
    </>    
  );
}

export default Text;