import React, { useState, useEffect } from 'react';

import axios from 'axios';


const URL = "https://game-of-thrones-quotes.herokuapp.com/v1/random/10";

export default function App() {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');

    const [resultTextQ, setResultTextQ] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    
    const [detectLanguageKey, setdetectedLanguageKey] = useState('')
    const [dataT, setDataT] = useState([]);

  const apiGet = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((dataT) => {
        setDataT(dataT);
        console.log(dataT);
      });
  };
  useEffect(() => {
    apiGet();
  }, []);
    const getLanguageSource = () => {
        axios.post(`https://libretranslate.de/detect`, {
            q: inputText, dataT
           
        })
        .then((response) => {
            setdetectedLanguageKey(response.data[0].language)
        })
    }
    const translateText = () => {
        setResultText(inputText)
       
       

        getLanguageSource();

        let data = {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }
        axios.post(`https://libretranslate.de/translate`, data)
        .then((response) => {
            setResultText(response.data.translatedText)
        })
    }
    const translateTextQ = () => {
       
        setResultText(dataT)
       

        getLanguageSource();

        let data = {
            q : dataT,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }
        axios.post(`https://libretranslate.de/translate`, data)
        .then((response) => {
            setResultText(response.data.translatedTextQ)
        })
    }

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    useEffect(() => {
       axios.get(`https://libretranslate.de/languages`)
       .then((response) => {
        setLanguagesList(response.data)
       })

       getLanguageSource()
    }, [inputText])
    return ( <>
        <div>
            <div className="app-header">
                <h2 className="header"> Translator</h2>
            </div>

            <div className='app-body'>
                <div>
                   <form>
                     
                        <form
                            
                            placeholder='Type Text to Translate..'
                            onChange={(e) => setInputText(e.target.value)}
                        />

                        <select className="language-select" onChange={languageKey}>
                            <option>Please Select Language..</option>
                            {languagesList.map((language) => {
                                return (
                                    <option value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            })}
                        </select>

                       <form 
                            inputMode='text'
                            placeholder='Your Result Translation..'
                            value={resultText}
                        />
                        <button onClick={translateText} name='translate'>Translate</button>
                        
                            </form>
                </div>
            </div>
            
        </div>
        <div>
        <ul>
          <h1>Game Of Thrones</h1>
          {dataT.length > 0 && dataT.map((item) => <li>{item.sentence}</li>)}
        </ul>
        
      </div>
      <div>
        <button onClick={apiGet}>Fetch API</button>
        <button onClick={translateTextQ}>Translate</button>
        <p>
            
        </p>
      </div>
      <div></div>
        </>
    )
}
