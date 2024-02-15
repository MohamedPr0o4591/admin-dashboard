import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeamPage from './pages/team/TeamPage.jsx';
import ContactsPage from './pages/contacts/ContactsPage.jsx';
import HomePage from './pages/dashboard/HomePage.jsx';
import InvoicesPage from './pages/invoices/InvoicesPage.jsx';
import FormMembers from './pages/form members/FormMembers.jsx';
import CalendarPage from './pages/calendar/CalendarPage.jsx';
import FaqPage from './pages/faq/FaqPage.jsx';
import BarChartPage from './pages/bar chart/BarChartPage.jsx';
import PieChartPage from './pages/pie chart/PieChartPage.jsx';
import LineChartPage from './pages/line chart/LineChartPage.jsx';
import GeographyPage from './pages/geography/GeographyPage.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes >
        <Route path='/' element={<App />} >
          <Route index element={<HomePage />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='invoices' element={<InvoicesPage />} />
          <Route path='form' element={<FormMembers />} />
          <Route path='calendar' element={<CalendarPage />} />
          <Route path='faq' element={<FaqPage />} />
          <Route path='bar' element={<BarChartPage />} />
          <Route path='pie' element={<PieChartPage />} />
          <Route path='line' element={<LineChartPage />} />
          <Route path='geo' element={<GeographyPage />} />
          <Route path='*' element={<h3 className='text-center fw-bolder'>Page Not Found</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

