import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import NotMatch from './pages/not-match';
import Navbar from './components/navbar';
import Main from './components/main';
import SinglePage from './pages/single-page';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route path="about/:slug'" element={<SinglePage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
