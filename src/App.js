import './App.css';
import InvoiceForm from './components/UserForms/invoiceForm';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DrawerComp from './components/Drawer/Drawer';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/invoices' element={<InvoiceForm/>}> </Route>
          <Route path='/drawer' element={<Drawer/>}> </Route>
        </Routes>
        <Footer/>
      </BrowserRouter> */}
    <DrawerComp/>
    </div>
  );
}

export default App;
