import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import NotMatch from './pages/not-match';
import Navbar from './components/navbar';
import Main from './components/main';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
