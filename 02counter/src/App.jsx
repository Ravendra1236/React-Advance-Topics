import {useState} from 'react'
import './App.css'

function App() {

  // let value = 5 ;
  // useState will return 2 value : value which has to be updated and function which will update that value
  let [value , setValue] = useState(0);

  const addValue = ()=>{
    // UI updation with help of hooks : useState 
    
    // Assignment : value must be between 0 and 20 
    if(value >= 0 && value < 20 ){
      value = value + 1 ;
      setValue(value);
    }
    
    // value = value + 1 ;
    console.log("Value added: " , value);
    
  }
  const deletedValue = ()=>{
    // UI updation with help of hooks : useState 
    if(value > 0 && value <= 20 ){
      value = value - 1 ;
      setValue(value);
    }
    // value = value - 1 ;
    console.log("Value deleted: " , value);
    
  }
  const restValue = ()=>{
    // UI updation with help of hooks : useState 
    value = 0;
    setValue(value);
    
    console.log("Value reseted: " , value);
    
  }

  return (
    <>
      <h1>Hello! this is a counter button and value is = {value}</h1>
      <br />
      <button onClick={addValue}>Counter Up{value}</button>
      <br /><br />
      <button onClick={deletedValue}>Counter Down{value}</button>
      <br /><br />
      <button onClick={restValue}>Rest{value}</button>
    </>
  )
}

export default App