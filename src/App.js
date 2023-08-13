import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header.js";
import HomePage from "./components/HomePage/HomePage.js";
import Checkout from "./components/Checkout/Checkout.js";
import FranchisePage from "./components/Franchise/franchise.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Header className="App-header" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart" element={<Checkout />} />
        <Route path='/franchise-enquiry' element={<FranchisePage />} />
      </Routes>
    </Router>
  );
}

export default App;
