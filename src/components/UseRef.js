import {useRef, useState} from 'react'

//useState for rerendring, initial value, num, null
//useRef it never RERENDERS => does not let you know
//it returs mutable object
//it is an object and has a .current value AND  NEVER RERENDER
export default function UseRef() {

  const [ num, setNum ] = useState( 0 )

  const inputOne = useRef()
  const inputTwo = useRef()

  const getNumBox = () => {
    console.log('This is the number one')
    console.log( inputOne.current )
    inputOne.current.style.backgroundColor ='pink'
  }

  const getTextBox = ( text ) => {
    console.log( 'this is text' )
    console.log( inputTwo.current )
    inputTwo.current.style.backgroundColor ='pink'
  }


  return (
    <>
      <div>
        <input
          ref={ inputOne }

          value={ num }//state
          type="number"
          onChange={ ( e ) => setNum( e.target.value ) }
           style={{backgroundColor:"red"}}
          />
      </div>

      <div>
        <input
          ref={ inputTwo }
          style={{backgroundColor:"green"}}
          value={ num }
          type="text"
          onChange={(e) => setNum(e.target.value)}/>
        <h3>The value is: { num }</h3>
        <button
          onClick={ () => getNumBox() }>Dollars</button>
         <button
          onClick={()=> getTextBox()}>Euro</button>
      </div>
    </>
  )
}
