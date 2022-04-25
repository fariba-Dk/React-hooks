import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/UseStateHook'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
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
