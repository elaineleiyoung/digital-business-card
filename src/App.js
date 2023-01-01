import Intro from './Intro.js';
import './App.css';
import About from './About.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Card">
          <Intro />
          <br></br>
          <About />
        </div>
        
      </header>
    </div>
  );
}

export default App;
