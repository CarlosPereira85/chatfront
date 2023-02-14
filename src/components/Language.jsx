import React, { useState, useEffect } from 'react'
import data from '../data/data.js'

import { useContext } from 'react'
import MyContext from '../context/MyContext'




const Language = () => {

    const { dataLanguage, setDataLanguage, setLanguageTras, languageTras } = useContext(MyContext)
   
    
    

    
   

    


  return (<>
    <select className="language-select" onChange={(e) => setLanguageTras(e.target.value)}  >
                            <option>Please Select Language..</option>
                            {data.map((idioma) => {
                                return (
                                    <option value={idioma.code}>
                                        {idioma.name}
                                    </option>
                                )
                            })}
                        </select>
                        <div>
                     
                        </div>
                        </>
  )
}
export default Language