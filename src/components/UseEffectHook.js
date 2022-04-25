import React, { useEffect, useState } from 'react'
import axios from "axios"

const UseEffectHook = () => {

  const [data, setData] = useState("")

  useEffect( () => {

    axios.get( "https://jsonplaceholder.typicode.com/comments" )
      .then( ( response ) => {
        setData(response.data)

        console.log("API got fetched")
    }, [])

    console.log('useEffect is getting called')

  })

  return (
    <>
      <div
        style={ { backgroundColor: "red", fontSize: 30} }
      >
        Hello from UseEffectHook component:
      </div>
      <div>{ data[ 9 ].email }</div>
      </>
  )
}
export default UseEffectHook
