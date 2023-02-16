import React, { useState, useEffect } from 'react'
import data from '../data/data.js'

import { useContext } from 'react'
import MyContext from '../context/MyContext'




const Language = () => {

    const { dataLanguage, setDataLanguage, setLanguage, language } = useContext(MyContext)
   
    
    

    
   

    


  return (<>
   <div class="flex justify-center">
    
  <div class="mb-3 xl:w-20">
    <select  class="form-select appearance-none
      block
      w-full
      px-3.5
      py-1.5
        
        content-center
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={(e) => setLanguage(e.target.value)}  >
                            
                            <option selected>English</option>
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
                        </div>
</div>

                        
                       
    </>


                        
  )
}
export default Language