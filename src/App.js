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
import RecipePage from './pages/Recipe';

function App() {
  return (
      <Container className="bg-white p-0 exp">
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
          <Route path='/recipe' element={<RecipePage />}/>
        </Routes>
      </Container>
  );
}

export default App;
