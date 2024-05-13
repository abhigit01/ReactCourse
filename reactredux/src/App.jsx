import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {incNumber, decNumber} from "./actions/index"

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();
  return (
  <>
  <div className="container">
    <h1>
      Increment/Decrement Counter
    </h1>
    <h4>Using React and Redux</h4>
    <div className="quantity">
      <button className='quantity_minus' title='Decrement'  onClick={()=>dispatch(decNumber())}>-</button>
      <input type="text" name='quantity' className='quantity_input' value={myState}/>
      <button className='quantity_plus' title='Increment' onClick={()=>dispatch(incNumber())}>+</button>
    </div>
  </div>
  </>
  )
}

export default App
