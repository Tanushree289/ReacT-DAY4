import React from 'react'
import { useState } from 'react';
import Childa from './Childa';

const Propdrilling = () => {
 
    const [name] = useState("Ankitha Shettigar")    
  return (
    <div style={{textAlign:"center"}}>
        <Childa firstName={name}/>
    </div>
  )
}
export default Propdrilling;
