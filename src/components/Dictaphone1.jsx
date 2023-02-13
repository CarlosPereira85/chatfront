import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicOffIcon from '@mui/icons-material/MicOff';
import CampaignIcon from '@mui/icons-material/Campaign';

const Dictaphone1 = () => {
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
  
     continuous: false,
     language: 'en-GB',
   });
 };
 return (
   <div>
     <div className='on-off'>
       <span className='listen'>
         
         {' '}
         {listening ? <div style={{color:"green"}}> <CampaignIcon/> </div>  : <div style={{color:"red" , fontWeight:'bold'}}> <MicOffIcon/> <span></span></div>}
      
        
         <button className='micro' onTouchEnd={SpeechRecognition.stopListening} type="button" onClick={listenContinuously}></button>
       </span>
       <div>
      
      
       </div>
     </div>
     <div>
       {message}
     </div>
     <div>
      
     </div>
   </div>
 );
};

export default Dictaphone1;