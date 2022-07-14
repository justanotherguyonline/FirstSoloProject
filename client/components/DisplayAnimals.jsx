import React from 'react';

// const {handleClick, setIsShown} = props;



const DisplayAnimals = (props) => {
  const nameOfBoxes = ['Cats','Dogs','Raccoons']
  const items = [];
  for (let i = 0; i < nameOfBoxes.length; i++){
    items.push(
    <div key={nameOfBoxes[i]} className='animalBox'> 
  
      <div> help </div>
    </div>
    )
  }

  return (
    <div className='rowOfAnimalBoxes'>
   {items}
    </div>
  )
}
export default DisplayAnimals;

//<button text='Plants' onClick={()=> props.handleClick}></button>