import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
      console.log("clicked", counter);
    } else {
      console.log("counter is grater then 20 can not add more numbers to the counter");
    }
  }

  const removevalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      console.log("clicked", counter);
    } else {
      console.log("counter value can not be negative");
    }
  }

  return (
    <>
      <h1>Counter in React using Hooks</h1>
      <h3>Main Value: {counter} </h3>
      <button onClick={addValue} >Add Value</button>
      <button onClick={removevalue} >Remove Value</button>
    </>
  )
}

export default App
