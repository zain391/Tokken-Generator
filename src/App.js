import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NoteState from './context/Notes/noteState';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <NoteState>
          <Routes>
            <Route path='/' element={<Header />}></Route>
          </Routes>
      </NoteState>
        </BrowserRouter>
    </div>
  );
}

export default App;
