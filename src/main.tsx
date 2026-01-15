import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { RootLayout } from '@/components/RootLayout';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import HomePage from './pages/HomePage';
import { CalendarPage } from './pages/CalendarPage';
dayjs.locale('ru');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='calendar' element={<CalendarPage />} />
          {/* <Route path='experiment' element={<ExperimentPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
