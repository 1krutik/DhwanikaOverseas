import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header   data-aos="fade-up" className="bg-black shadow ">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-red-600"><img className='w-[70px] h-[70px] rounded-full' src="/logos/dhwanika.jpg" alt="" /></Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><Link to="/about" className="hover:text-red-600">About</Link></li>
          <li><Link to="/tours/domestic" className="hover:text-red-600">Domestic Tours</Link></li>
          <li><Link to="/tours/international" className="hover:text-red-600">International Tours</Link></li>
          <li><Link to="/eurail" className="hover:text-red-600">Eurail</Link></li>
          <li><Link to="/flights" className="hover:text-red-600">Flights</Link></li>
          <li><Link to="/hotels" className="hover:text-red-600">Hotels</Link></li>
          <li><Link to="/offers" className="hover:text-red-600">Offers</Link></li>
        </ul>

        <div className="hidden md:block">
          <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Login</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pt-4 pb-6 space-y-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-600">About</Link></li>
            <li><Link to="/tours/domestic" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Domestic Tours</Link></li>
            <li><Link to="/tours/international" onClick={() => setMenuOpen(false)} className="hover:text-red-600">International Tours</Link></li>
            <li><Link to="/offers" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Offers</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Blog</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Contact</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-center">Login</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
