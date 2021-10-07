import './App.scss';
import { Router } from "@reach/router"
import Welcome from './views/Welcome';
import About from './views/About';

function App() {

  return (
    <div className="App">
      <Router>
        <Welcome default path="/home" />
        <About path="/about" />

      </Router>
    </div>
  );
}

export default App;
