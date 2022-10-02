import React,{useState} from 'react'
import './Button.css';


function Button(props) { 
  
     
  return (
    <div>
        <button className='button'><h3>{props.text}</h3></button>
    </div>
  )
}

export default Button