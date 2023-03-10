import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [title,setTitle] = useState('Свіфт говно')
  return (
    <div className="App">
      <header className="App-header">
          <button className='button' onClick={()=>{
              let number = Math.floor(Math.random() * 101);
              if (number > 50){
                  setTitle('Так, він йде нахуй')
              }else {
                  setTitle('Не сьогодні,  козаче')
              }
          }}>Чи вигнали Володю?</button>
          <h1>{title}</h1>
      </header>
    </div>
  );
}

export default App;
