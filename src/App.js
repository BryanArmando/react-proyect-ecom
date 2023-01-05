import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Compost from './components/Comp';
import Refact from './components/Constetne';

function App() {
  return (
    <div className="App">
      <header >
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' />
            <Route exact path='/tareas' element={<Compost/>}/>
            <Route exact path='/contact' element={<Refact/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
