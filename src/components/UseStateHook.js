import React, { useState } from 'react';

const arr = [ 'purple', 'yellow', 'orange','green', 'red']


const UseStateHook = () => {
//hooks example
  const [ counter, setCounter ] = useState( 0 )
  const [ inputValue, setInputValue ] = useState( 'Pedro' )


  //onClick events
  const increment = () => {
   setCounter(counter + 1)
  }

  const changeInput = ( e ) => {
    e.preventDefault()
    const newValue = e.target.value

    setInputValue(newValue)
  }

//color change hook
  const [ currColor, setCurrColor ] = useState(1)

  const colorChange = () => {
    const newColor = currColor + 1;

    if (arr[newColor]){
      setCurrColor(newColor)
    } else {
      setCurrColor(0)
    }
  }

  return (
    <div>

      <div>
        <h2>
          { counter }
        </h2>
        <button onClick={ increment }>Increment Here</button>
      </div>

      <div>
        <input onChange={ changeInput } style={ { backgroundColor: "aqua" } } placeholder="Type here to update" />
        <p>
          { inputValue }
        </p>
      </div>

      <div>
        <button
         type="button"
          style={{backgroundColor: arr[currColor]}}
          onClick={colorChange}>Click here!
        </button>

      </div>

    </div>

  )
}
export default UseStateHook;
