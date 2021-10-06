import logo from './logo.svg';
import './App.css';
// import FatchData from './Componats/Read data from remote';
import FatchHooks from './Componats/fatch_using_Hooks';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <FatchData /> */}
        <FatchHooks />
      </header>
    </div>
  );
}

export default App;
