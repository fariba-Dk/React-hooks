import { useState } from 'react'

function UseState() {

  const [ text, setText ] = useState(true)

  const toggle = () => {
    setText(!text)
  }
  return (
    <div>
      <button
        onClick={toggle }
      >Click Me
      </button>
      { text && <h1>I was set to true</h1> }
    </div>
  )
}
export default UseState


