import React from 'react';

const SearchBars = () => {
  return(
    <div className='searchBarContainer'>
      <div className='plantSearcher'> 
        <p> 
          <input type='text' id='userInputPlant'></input>
          <button onClick = {() => {console.log((document.querySelector('#userInputPlant')).value)}}> Search Plant </button>
        </p>
    </div>
    <div className ='foodSearcher'> 
      <p>
        <input type='text' id='userInputFood'></input>
          <button onClick={() => {console.log((document.querySelector('#userInputFood').value))}}> Search Food</button>
      </p>
   </div>
   <div className ='suggestionBox'> 
      <p>
        <input type='text' id='suggestion'></input>
          <button onClick={() => {console.log((document.querySelector('#suggestion').value))}}> Suggestions to Add </button>
      </p>
   </div>
</div>
  )

}
export default SearchBars
//  <input type='text' id='userInputPlant'> </input>
// onClick = {() => {console.log((document.querySelector('#userInputPlant')).value)}}


{/* <input type='text' id='userInputFood'></input>
<button onClick={() => {console.log((document.querySelector('#userInputFood').value))}}> Search Food</button>
</p> */} 
