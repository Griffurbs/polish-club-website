import './App.css';

import { Routes, Route } from 'react-router-dom';

import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import LibraryPage from './pages/Library';
import OfficerPage from './pages/Officer';

import Navbar from './components/layout/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/library' element={<LibraryPage />}/>
        <Route path='/officer' element={<OfficerPage />}/>
      </Routes>
    </div>
  );
}

export default App;
