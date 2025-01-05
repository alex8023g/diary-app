import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from '@/components/HomePage.tsx';
import { HeaderLayout } from '@/components/HeaderLayout';
import { CalendarPage } from '@/components/CalendarPage.tsx';
import { TestPage } from './components/TestPage';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='calendar' element={<CalendarPage />} />
          {/* <Route path='calendar' element={<TestPage />} /> */}
          <Route path='test' element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
