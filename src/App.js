import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import LibraryPage from './pages/Library';
import OfficerPage from './pages/Officer';
import CalendarPage from './pages/Calendar';
import DonationPage from './pages/Donation';

import MainNavbar from './components/layout/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Container className="bg-white p-0 exp" fluid>
        <Banner />
        <MainNavbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/library' element={<LibraryPage />}/>
          <Route path='/officer' element={<OfficerPage />}/>
          <Route path='/calendar' element={<CalendarPage />}/>
          <Route path='/donate' element={<DonationPage />}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
