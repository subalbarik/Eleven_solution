import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CourseTypePage from './Pages/CourseType';
import CoursesPage from './Pages/Courses';
import OfferingsPage from './Pages/CourseOffers';
import RegistrationsPage from './Pages/StudentRegistration';
import Header from './components/UI/Headers';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-types" element={<CourseTypePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/offerings" element={<OfferingsPage />} />
        <Route path="/registrations" element={<RegistrationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
