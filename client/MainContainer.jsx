import React, {useState} from 'react';
import DisplayAnimals from './components/DisplayAnimals'
import SearchBars from './components/SearchBars'
import Modal from './components/Modal'

const MainContainer = (props) => {
   const [isShown, setIsShown] = useState(false);
  const handleClick = e => {
    setIsShown(!isShown);
  }
  return (
    <div className='outerContainer'>
      <h1> Household Pets and Things that are Bad for Them </h1>
      <DisplayAnimals handleClick={handleClick}/>
      <SearchBars/>
      {isShown && <Modal handleClick={handleClick}/>}
     
  </div>
  )
}
  // <button className='testOpenModal' handleClick={handleClick}}>  Open </button>
 //handleclick = {handleClick} setIsShown = {setIsShown} isShown = {isShown}
export default MainContainer;