import { useContext } from "react"
import MyContext from "../context/MyContext"
import { Circles } from  'react-loader-spinner'
import SendIcon from '@mui/icons-material/Send';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import MicOffIcon from '@mui/icons-material/MicOff';
import CampaignIcon from '@mui/icons-material/Campaign';
import Language from "./Language"
import RefreshIcon from '@mui/icons-material/Refresh';

const Chat = () => {
    
    
    const { response, handleSubmit, loading, transcript,tifOptions, setText, listening, listenContinuously, setMessage, refreshPage  } = useContext(MyContext)
    
   
  return (
      <div  class="w-full max-w-screen-lg  			">
        <div style={{marginTop:"20px"}}>
            <Language />
        
          </div>
          <div class="md:flex md:items-center mb-0">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
    




      <span style={{textAlign:'center'}} >
      
      {' '}
         {listening ? <div style={{  color:"green"}}> <CampaignIcon/> <p style={{fontSize:"10px"}}>Mic On</p> </div>  : <div style={{color:"red" , fontWeight:'bold'}}> <MicOffIcon/>  <p style={{fontSize:"10px"}}>Mic Off</p><span></span></div>}
        
        
         <button className='micro' onTouchEnd={SpeechRecognition.stopListening} type="button" onClick={listenContinuously}> </button>
       
      </span>
    </label>
  </div>
  
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right  md:mb-0 pr-4" for="inline-full-name">
        You 
      </label>
    </div>
    <div class="md:w-2/3">
      <textarea value={transcript} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Turn ON Microphone and make your question.">
      {transcript}
        </textarea>
    </div>
    <button className="reset" onClick={refreshPage}><RefreshIcon/></button>


  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <text class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        ChatGPT 
      </text>
    </div>
    <div class="md:w-2/3">
      <textarea value={response} onChange={(e)=>{setText(e.target.value)}} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
      pb-20	dark:focus:border-blue-500" placeholder="Result...">
        </textarea>
    </div>
  </div>

 
      <div>
{loading ? (
  <div style={{position:"absolute" ,left:'25%'}}>
<Circles 
textalign="center"
  height="30"
  width="30"
  color= " #A855F7"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  
/>
</div>
     
    ) : (
      
    
        <div >
      <form style={{position:"absolute" ,left:'25%'}} className="" onSubmit={handleSubmit}>
        
        <input
        className='input'
      type="text"
          value={tifOptions}
          
          
          
         
          onChange={(e) => setMessage(e.target.value)}
        >
          
        </input>
        <button  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold  
         rounded-full py-4 px-4
        
        leading-3	"type="submit"><span style={{color:"black" ,fontSize:'15px', fontWeight:"bold" }}>< SendIcon/></span></button>
    
      </form>
    </div>
    )}
    
   
    
    </div>
    
    </div>
  


  )
}
export default Chat