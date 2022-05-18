import logo from './logo.svg';
import './App.css';
import { Seccion } from './header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Seccion/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
