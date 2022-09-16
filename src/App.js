import './App.css';
import TokkenTask2 from './components/Tokentask2/TokkenTask2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MaterialUiDate from './components/MaterialUiDate/MaterialUiDate';

function App() {
  return (                                    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TokkenTask2/>}></Route>          
          <Route path="/work" element={<MaterialUiDate/>}></Route>          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
