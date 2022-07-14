import React from 'react';





const DisplayAnimals = (props) => {
  const{ handleClick} = props;
  const nameOfBoxes = ['Cats','Dogs','Raccoons']
  const items = [];
  for (let i = 0; i < nameOfBoxes.length; i++){
    items.push(
    <div key={nameOfBoxes[i]} className='animalBox'> 
     <button classname='plantBox' onClick={()=> handleClick()}>Plants </button> <br></br>
     <button classname='foodBox' onClick={()=> handleClick()}>Food </button> <br></br>
     <button classname='tipsBox' onClick={()=> handleClick()}>Tips </button> <br></br>
    </div>
    )
  }

  return (
    <div className='rowOfAnimalBoxes'>
    {/* {isShown
  ? items[0]
  : <button onClick={()=> props.handleClick}></button>
}
    <div> {items[1]}</div>
    <div> {items[2]}</div> */}
    {items}
    </div>
  )
}
export default DisplayAnimals;