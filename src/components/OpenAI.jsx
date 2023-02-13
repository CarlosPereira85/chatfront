import { useState, useRef } from 'react'
import { useSpeechRecognition } from 'react-speech-recognition'
import MyContext from '../context/MyContext';
import React, { useContext } from 'react';



// creating an instance of the OpenAI API
function OpenAI() {

const {response, handleSubmit} = useContext (MyContext)
  
  const { finalTranscript, } = useSpeechRecognition ();

  console.log('code>',finalTranscript)
 
  ; 
 
  
  console.log("type",typeof(finalTranscript))
  

  
  
  
  
 

  
  const tifOptions = Object.assign([], finalTranscript).join('')
  



console.log('trying',tifOptions) 

  const [message, setMessage] = useState(`${tifOptions}.`)

 

  

  
  

  return (
    <div>
      
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
        className='input'
      type="text"
          value={tifOptions}
          
          
          
         
          onChange={(e) => setMessage(e.target.value)}
        >
          
        </input>
    <button className='ask' type="submit">ASK</button>
      </form>
    </div>
    <div>
      
    
    
    </div>
    
    </div>
  ) 
}

export default OpenAI
    