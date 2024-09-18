import React from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AboutPage from './page-layout/About';
import Navbar from './page-layout/nav-bar/NavBar';
import LandingPage from './product/LandingPage';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
