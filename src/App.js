import { useState, useEffect, useRef } from 'react'
import Counter from './components/Counter'
import UseState from './components/UseState'
import Array from './components/Array'
import UseRef from './components/UseRef'
import UseEffect from './components/UseEffect'
import UseEffExample from './components/UseEffExample'
import Ternary from './components/Ternary'
//hooks rules: no loop, condition ir nested
function App() {

  const [ name, setName ] = useState( { first: '', last: '' } )
  const age = 20

  return (
    <>
      <div>
           <UseState/>
      </div>
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
        <div>{age >= 20 ? <h1>HI you are over 20, so all good</h1> : <h1> Sorry you can go in</h1>}
           <Ternary/>
        </div>

        <div>
           <UseState/>
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
        <div>
          <UseEffExample />
        </div>


      </div>
    </>
  );
}

export default App;
