import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/" style={{ textDecoration: "none", color: "inherit", fontSize: "2.5rem" }}>Manthra</Link>
      </div>

      <nav className="navigation">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/cart" className="cart">
          Cart
        </Link>
        <Link to="/franchise-enquiry">Franchise Enquiry</Link>
      </nav>
    </header>
  );
};

export default Header;
