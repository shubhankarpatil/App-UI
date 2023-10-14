import { Link } from "react-router-dom";
import "./Header.css";
import ContactUs from '../Contact Us/contactUs'

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "2.5rem" }}>Manthra</Link>
      </div>

      <nav className="navigation">
        {/* <Link to="/about">About Us</Link> */}
        {/* <Link>Recepies</Link>  */}
        <Link to="/cart"> Cart </Link>
        <Link to="/franchise-enquiry">Franchise Enquiry</Link>
        <ContactUs />
      </nav>
    </header>
  );
};

export default Header;
