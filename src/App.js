import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import MaindashBoard from './Components/MaindashBoard';
import Products from './Components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SalesTable from './Components/SalesTable';
import SalesExpenseData from './Components/SalesExpenseData';
import LogOut from './Components/LogOut';

function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogOut />} />
          <Route path="/layout" element={<Layout />}>
            <Route path="/layout/maindashboard" element={<MaindashBoard />}/>
              <Route path="/layout/products" element={<Products />}/>
              <Route path="/layout/salestable" element={<SalesTable/>}/>
              <Route path="/layout/salesexpensedata" element={<SalesExpenseData />}/>
              
              </Route>
              <Route path="/logout" element={<LogOut />} />

            </Routes>
          </BrowserRouter>
       
          </>
        );
}

        export default App;
