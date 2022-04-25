import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/UseStateHook';
import UseReducerHook from './components/UseReducerHook';
import UseEffectHook from './components/UseEffectHook'

function App() {
  return (
    <>
      <div>
         <UseEffectHook />
      </div>

      <div className="App">
        <header className="App-header">
      <div>
        <UseReducerHook/>
      </div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Hooks
          </h1>
            <UseStateHook/>
        </header>
      </div>

    </>
  );
}

export default App;
