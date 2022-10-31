import React from 'react'
import Childc from './Childc';

const Childb = ({firstName}) => {
  return (
    <div style={{textAlign:"center"}}>
        Childa B
        <Childc firstName={firstName}/>
    </div>
  )
}
export default Childb;
