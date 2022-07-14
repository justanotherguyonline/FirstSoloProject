import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import MainContainer from './MainContainer';
import styles from './styles.scss';
// class App extends Component{


//   render(){
//     return(
//       <div id="app"> 
//         <button onClick={()=> console.log(5)}>Default</button>
//       </div>
//     )
//   }
const openModal = () => {

};

const closeModal = () => {

}


const App = () => {
  return(
    <div id="app"> 
      <MainContainer/>
     </div>
  )
}


//render(<App/>, document.querySelector('#app'));


//eactDOM.render(<App/>, document.getElementById('app'));
// const mainBody = document.querySelector('root');
// mainBody.appendChild('app');
// root.render(app);

export default App