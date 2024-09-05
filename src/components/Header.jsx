import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className=" py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">home</Link></li>
          <li><Link to="/skills" className="hover:text-gray-300">skills</Link></li>
          <li><Link to="/projects" className="hover:text-gray-300">projects</Link></li>
          <li><Link to="/experiences" className="hover:text-gray-300">experience</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;