import React from 'react'
import Childb from './Childb';

const Childa = ({firstName}) => {
  return (
    <div style={{textAlign:"center"}}>
        Child A
        <Childb firstName={firstName}/>
    </div>
  )
}
export default Childa;
