import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ForkimForm from './components/Forms/FormikForm.jsx';
import Form from './components/Forms/Forms';
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        
          <Route path="/" element={<ForkimForm/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
