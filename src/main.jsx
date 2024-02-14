import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeamPage from './pages/team/TeamPage.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes >
        <Route path='/' element={<App />} >
          <Route index element={<h3 >Dashboard</h3>} />
          <Route path='team' element={<TeamPage />} />
          <Route path='*' element={<h3 className='text-center fw-bolder'>Page Not Found</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

