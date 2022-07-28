import { useState, useEffect, useRef } from 'react'
import Counter from './components/Counter'
import Array from './components/Array'
import UseRef from './components/UseRef'
import UseEffect from './components/UseEffect'

//hooks rules: no loop, condition ir nested
function App() {

  const [ name, setName ] = useState( { first: '', last: '' } )

  return (
    <>
      <div>
        <div>
          <form>
            <h2 style={{color: 'green'}}>Your first name is: { name.first }</h2>
            <input
            style={{color:'blue'}}
            type="text"
            value={name.first}
            onChange={ e => setName( { first: e.target.value}) } />
            <h2 style={{color: 'green'}}>Your last name is: { name.last }</h2>
            <input
            style={{color:'purple'}}
            type="text"
            value={name.last}
            onChange={ e => setName( { last: e.target.value}) } />
          </form>
        </div>

        <div>
           <Counter/>
        </div>

        <div>
           <Array/>
        </div>

        <div>
          <UseRef />
        </div>

        <div>
          <UseEffect />
        </div>


      </div>
    </>
  );
}

export default App;
