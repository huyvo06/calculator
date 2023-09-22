// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <div className="flex-box" >  
        <div className="result"></div>
        <div className="inputs">
          <div className="input" style={{backgroundColor:'gray'}}>C</div>
          <div className="input" style={{backgroundColor:'gray'}}>+</div>
          <div className="input" style={{backgroundColor:'gray'}}>%</div>
          <div className="input" style={{backgroundColor:'orange'}}>/</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>7</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>8</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>9</div>
          <div className="input" style={{backgroundColor:'orange'}}>*</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>4</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>5</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>6</div>
          <div className="input" style={{backgroundColor:'orange'}}>-</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>1</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>2</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>3</div>
          <div className="input" style={{backgroundColor:'orange'}}>+</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)', flex:'50%'}}>0</div>
          <div className="input" style={{backgroundColor:'rgb(224, 224, 224)'}}>.</div>
          <div className="input" style={{backgroundColor:'orange'}}>=</div>
        </div>
      </div>
    </>
  )
}

export default App
