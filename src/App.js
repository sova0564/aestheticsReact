import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Account from "./components/Pages/Account/Account";
import Blog from "./components/Pages/Blog/Blog";
import Catalog from "./components/Pages/Catalog/Catalog";
import Checkout from "./components/Pages/Checkout/Checkout";
import Contacts from "./components/Pages/Contacts/Contacts";
import DeliveryAndPayment from "./components/Pages/DeliveryAndPayment/DeliveryAndPayment";
import Error404 from "./components/Pages/Error404/Error404";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route
              path="/deliveryAndPayment"
              element={<DeliveryAndPayment />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/error404" element={<Error404 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
