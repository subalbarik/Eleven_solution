import { Link } from 'react-router-dom';
import '../../Styles/Header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/course-types">CourseTypes</Link>
      <Link className="nav-link" to="/courses">Courses</Link>
      <Link className="nav-link" to="/offerings">Offers</Link>
      <Link className="nav-link" to="/registrations">Registration</Link>
    </nav>
  );
}
