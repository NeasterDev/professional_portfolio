import logo from './logo.svg';
import bootstrap from 'bootstrap'; // This is necessary for bootstrap to work
import { Navbar } from './components/Navbar';
import { About } from './components/About';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
    </div>
  );
}

export default App;
