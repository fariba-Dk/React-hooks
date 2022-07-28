import { useEffect, useRef } from 'react';

function UseEffect() {
  //we should jump from box to box then submit

  //to focus on first name when its finished loading
  const first = useRef(null)
  const last = useRef(null)
  const submit = useRef( null )

    useEffect( () => {
    //alert('first load')
      first.current.focus()
      }, [] )
  //[] === run it on the initial load

  const firstKeyDown = ( e ) => {
    if(e.key==='Enter' )
    last.current.focus()
  }

  const lastKeyDown = ( e ) => {
    if ( e.key === 'Enter' )
      submit.current.focus()
   }

  const submitKeyDown = (e) => {
     alert('form submitted')
  }

  return (
    <>
      <div>
        <h1>~~~~~~ useEffect Hook ~~~~~~~~</h1>
        <h2>Hi this is useEffect hook</h2>
        <input
          ref={first}
          type='text'
          placeholder="first name"
          onKeyDown={ firstKeyDown }
          lastKeyDown
        />
        <input
          ref={last}
          type='text'
          placeholder="last name"
          onKeyDown={ lastKeyDown }

        />
        <button
          ref={ submit }
          onKeyDown={ submitKeyDown }
        >Submit</button>
      </div>
    </>
  )
}
export default UseEffect
