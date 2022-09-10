import './App.css';
import InvoiceForm from './components/UserForms/invoiceForm';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      {/* <InvoiceForm/> */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/invoices' element={<InvoiceForm/>}> </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
