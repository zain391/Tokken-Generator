import './App.css';
import TokkenTask2 from './components/Tokentask2/TokkenTask2';
import {BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Navbar from './components/Header/navbar';
import FieldArraycom from './components/FromikFieldArray/fieldArray';
import Other from './components/other/Other';
function App() {
  return (                                    
    <div className="App">
     

     <Router>
      	<Navbar/>
      <Routes>
        <Route path='/' element={ <TokkenTask2/>}></Route>
        <Route path='/array' element={ <FieldArraycom/>}></Route>
        <Route path='/other' element={ <Other/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
