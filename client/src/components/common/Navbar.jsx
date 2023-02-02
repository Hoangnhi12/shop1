import { Link } from "react-router-dom";
import Logo from "/assets/car.png";

const Navbar = () => {
  return (
    <nav className="shadow-lg">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div className="flex justify-between items-center py-6 h-navbar">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="car Logo" className="h-20 w-15" />
          </Link>

          {/* NavList */}
          <ul className="flex gap-4 items-center">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-200">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
          </ul>

          {/* Admin Button */}
          <Link to="/admin/products" className="btn">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
