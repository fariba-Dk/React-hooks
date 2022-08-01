import { useEffect, useState} from 'react'

function UseEffExample() {

  const [num, setNum] = useState(3)
  //if you have a state, like num whenever num changes useffect gets call again
  useEffect( () => {
    console.log('FIRST CALL')
  }, [] )
//life cycle hook that runs everytime
  useEffect( () => {
    console.log('this is now serving ticket num ', num)
  },[num])

  return (
    <div>
      <h1>
        'I am from component UseEffExample'
      </h1>

    </div>
  )
}

export default UseEffExample;
