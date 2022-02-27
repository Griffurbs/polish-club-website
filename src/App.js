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
import JoinPage from './pages/Join';
import InfoPage from './pages/Info'

function App() {
  return (
      <Container className="bg-white p-0 exp">
        <Banner />
        <MainNavbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/info' element={<InfoPage />}/>
          <Route path='/library' element={<LibraryPage />}/>
          <Route path='/calendar' element={<CalendarPage />}/>
          <Route path='/donate' element={<DonationPage />}/>
          <Route path='/recipe' element={<RecipePage />}/>
          <Route path="/join" element={<JoinPage />}/>
        </Routes>
      </Container>
  );
}

export default App;
