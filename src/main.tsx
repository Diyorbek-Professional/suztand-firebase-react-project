import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Hero from './page/hero';
import Auth from './page/auth';
import { AuthProvider } from './context/app.context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
