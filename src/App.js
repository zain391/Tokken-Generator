import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ForkimForm from './components/Footer/FormikForm';
import Form from './components/Footer/Forms';
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />}></Route>
          <Route path="/formik" element={<ForkimForm />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
