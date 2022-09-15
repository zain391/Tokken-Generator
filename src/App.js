import './App.css';
import TokkenTask2 from './components/Tokentask2/TokkenTask2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TokkenModal from './components/TokkenModal/TokkenModal';
function App() {
  return (                                    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TokkenTask2/>}></Route>
          <Route path="/modal" element={<TokkenModal/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
