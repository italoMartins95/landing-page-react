import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header/header.component'
import Home from './pages/home/home.component';
import Products from './pages/products/products.component';
import Login from './pages/login/login.component';
import AreaCliente from './pages/protected/area-cliente/area-cliente.component';
import AreaAdministrador from './pages/protected/area-administrador/area-administrador.component';

import './App.scss'

function App() {
  return (
    <>
      <Router basename='/landing-page-react'>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/produtos' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/area-cliente' element={<AreaCliente />} />
            <Route path='/area-administrador' element={<AreaAdministrador />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
