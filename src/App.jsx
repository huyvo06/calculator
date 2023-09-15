// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className="flex-container" >  
        <div className="result">
             
        </div>
        <div className="import">
          <div className="import1">
            <div className="on">
              <button>C</button>
              <button>±</button>
              <button>%</button>
            </div>
            <div className="under">
              <button>7</button>
              <button>8</button>
              <button>9</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button style={{width:'140px'}}>0</button>
              <button>.</button>
            </div>
          </div>
          <div className="import2">
            <button>÷</button>
            <button>×</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
