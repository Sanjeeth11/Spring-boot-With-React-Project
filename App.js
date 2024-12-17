import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TestCounter from './components/TestCounter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div>
          <Counter/>
          </div>
          
        </p>
        <p>
          <div>
          <TestCounter name = "PSSR" age="27"/>
          </div>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
