import React, {useState} from 'react';
import DisplayAnimals from './components/DisplayAnimals'
import SearchBars from './components/SearchBars'


const MainContainer = (props) => {
  // const [isShown, setIsShown] = setState(false);
  // //const [closeModal, setCloseModal] = setState(null);
  // const handleClick = e => {
  //   setIsShown(current => !current);
  // }
  return (
    <div className='outerContainer'>
      <h1> Household Pets and Things that are Bad for Them </h1>
      <DisplayAnimals />
      <SearchBars/>
     
  </div>
  )
}
  
 
export default MainContainer;