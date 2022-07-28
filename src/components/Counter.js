import React, { useState } from 'react'


function Counter() {

  const initialCount = 0
  const [ count, setCount ] = useState( 0 )

  const incrementByFive = (count) => {
    setCount(count+=5)
  }

  return (
    <>
      <div>
        <div style={{ padding:20, margin: 30, fontSize:20, color: 'purple'}}>
        <h2>This is Counter Component </h2>
          count: { count }
        </div>

        <div style={{padding:20, margin:10}}>
          <button onClick={ () => setCount( initialCount ) }>Reset to 0</button>
          <button onClick={ () => setCount( count + 1 ) }>Increment by 1</button>
          <button onClick={ () => setCount( count - 1 ) }>Decrement by 1</button>
          <button onClick={ () => setCount(incrementByFive) }>Increment by 5</button>
        </div>
     </div>
    </>
  )
}
export default Counter
