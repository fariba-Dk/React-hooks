import React, { useState } from 'react'


export default function Array() {


  const [ items, setItems ] = useState( [] )

  function pushToArray() {

    setItems([...items, {
      key: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }

  return (
    <>
      <div>
        <div style={{ padding:20, margin: 30, fontSize:20, color: 'red'}}>
          <h2>This is Array Component </h2>
          add { items }

          <div>
            <button onClick={pushToArray}>Add</button>
            <ul>
          { items.map( item => <li key={ item.key }>{ item.value }</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
