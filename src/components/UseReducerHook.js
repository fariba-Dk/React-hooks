import React, { useReducer } from 'react';
import axios from "axios";

const reducer = ( state, action ) => {
  switch ( action.type ) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText }
    case "toggleShowText":
      return { count: state.count, showText: !state.showText }
    default:
      return state
  }
}

const UseReducerHook = () => {

  //hooks
  const [ state, dispatch ] = useReducer( reducer,
    { count: 0, showText: true } )

  return (

    <div>
      <h4> 🦩 useReducer hook 🪝</h4>
      <h2>{ state.count }</h2>
      <button onClick={ () => {
        dispatch( { type: "INCREMENT" } )
        dispatch({ type: "toggleShowText"})
      }}>
        Click Me
      </button>
      {state.showText && <p>TRUE</p>}
    </div>
  )
}
export default UseReducerHook;
