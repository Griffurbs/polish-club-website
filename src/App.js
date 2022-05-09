import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import LibraryPage from './pages/Library';
import OfficerPage from './pages/Officer';
import CalendarPage from './pages/Calendar';
import DonationPage from './pages/Donation';

import MainNavbar from './components/layout/Navbar';
import Banner from './components/Banner';
import RecipePage from './pages/Recipe';
import JoinPage from './pages/Join';
import BooksPage from './pages/Books';
import Walesa from './pages/Walesa';
import Courses from './pages/Courses';

function App() {
  return (
      <Container className="bg-white p-0 exp" fluid>
        <Banner />
        <MainNavbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/officer' element={<OfficerPage />}/>
          <Route path='/library' element={<LibraryPage />}/>
          <Route path='/books' element={<BooksPage />}/>
          <Route path='/calendar' element={<CalendarPage />}/>
          <Route path='/donate' element={<DonationPage />}/>
          <Route path='/recipe' element={<RecipePage />}/>
          <Route path="/join" element={<JoinPage />}/>
          <Route path="/walesa" element={<Walesa />}/>
          <Route path="/courses" element={<Courses />}/>
        </Routes>
      </Container>
  );
}

export default App;
