import './App.css';
import TokkenTask2 from './components/Tokentask2/TokkenTask2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TokkenDeploy from './components/Tokentask2/TokkenDeploy';
function App() {
  return (                                    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TokkenTask2/>}></Route>          
          <Route path="/dev" element={<TokkenDeploy/>}></Route>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
