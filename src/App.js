import "./App.css";
import Header from "./components/Layout/Header.js";
import HomePage from "./components/HomePage/HomePage.js";
import Checkout from "./components/Checkout/Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header className="App-header" />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cart" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
