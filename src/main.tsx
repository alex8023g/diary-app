import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './HomePage.tsx';
import { Header } from './components/Header.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
