import React from 'react'
import modalSyles from '..//Modal.scss'


function Modal(props){
  const {handleClick} = props;
  return(
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='closeButton'>
        <button onClick={()=> handleClick()}> X </button>
        </div>
        
        <div className='title' id='you make a fetch request inside of the div using useEFFCT?'>
          <p> displayed fetched/axios list data</p>
        </div>
  
    
      </div>
    </div>
  )
}

export default Modal;

//    <div className='footer'></div>
//      <div className='body'></div>