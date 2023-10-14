import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "./components/Header/Header.js";
import Footer from './components/Footer/footer.js'
import "./App.css";

const HomePage = React.lazy(() => import("./components/HomePage/HomePage.js"));
const Checkout = React.lazy(() => import("./components/Checkout/Checkout.js"));
const FranchisePage = React.lazy(() => import("./components/Franchise/franchise.js"));

function App() {
  return (
    <Suspense fallback={<div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}><CircularProgress style={{ color: '#379237'}}/></div>}>
      <Router>
        <Header className="App-header" />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/franchise-enquiry" element={<FranchisePage />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
