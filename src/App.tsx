import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import PageLayout from './page-layout/PageLayout';
import AboutPage from './page-layout/About';
import Navbar from './page-layout/nav-bar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<PageLayout
        />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
