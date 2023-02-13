import MyContext from "./MyContext";
import React, { useState, useEffect, useRef } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';


import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';




const MyProvider = ({ children }) => {
  const [text,setText] = useState('');
  const {speak} = useSpeechSynthesis();
  const [response, setResponse] = useState('')
  const ref = useRef(null);;
  const [timeLeft, setTimeLeft] = useState(null);
  
    useEffect(() => {
        const timeoutId = setTimeout(() =>{ handleOnClick()}, 1000);
        return () => clearTimeout(timeoutId);
      }, [response]);

      
      const handleOnClick = () => {
         
        
        speak({text:response})
      }
      console.log('text',text)


    const [message, setMessage] = useState('');
 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi there!')
   },
 ]
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
   SpeechRecognition.startListening({
  
     continuous: true,
     language: 'en-GB',
   });
 };

  

 
 const handleSubmit = async (e) => {
    
   

      
  
      e.preventDefault()
      setMessage("")
      
   
      
      const response = await fetch('https://gptback.onrender.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ finalTranscript })
      })
     
      .then(res => res.json())
      .then(data => {
        setResponse(data.message)
      })
      console.log(response)
    }
    
     

    return (
        <MyContext.Provider 
        value={{
            text,
            setText,
            handleOnClick,
            transcript,
             resetTranscript, 
             listening, 
             message,
             listenContinuously,
              handleSubmit,
              response,
            






        }}>

            {children}

        </MyContext.Provider>
    )
}


export default MyProvider;