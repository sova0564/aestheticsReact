import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Account from "./components/Pages/Account/Account";
import Blog from "./components/Pages/Blog/Blog";
import Catalog from "./components/Pages/Catalog/Catalog";
import Contacts from "./components/Pages/Contacts/Contacts";
import DeliveryAndPayment from "./components/Pages/DeliveryAndPayment/DeliveryAndPayment";
import Error404 from "./components/Pages/Error404/Error404";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/Pages/Product/ProductCard";
import ContactInfo from "./components/Pages/Account/ContactInfo";
import Address from "./components/Pages/Account/Address";
import WishList from "./components/Pages/Account/WishList";
import History from "./components/Pages/Account/History";
import Cart from "./components/Pages/Cart/Cart";
import PersonalInfoCart from "./components/Pages/Cart/PersonalInfoCart";
import PaymentCart from "./components/Pages/Cart/PaymentCart";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home blogMainSection={props.state.blogMainSection} />}
            />
            <Route
              path="/catalog"
              element={
                <Catalog
                  products={props.state.products}
                  accordionType={props.state.accordionType}
                  recentProducts={props.state.recentProducts}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductCard
                  products={props.state.products}
                  recentProducts={props.state.recentProducts}
                />
              }
            />
            <Route
              path="/delivery"
              element={
                <DeliveryAndPayment
                  deliverySection={props.state.deliverySection}
                />
              }
            />
            <Route
              path="/blog/:id"
              element={<Blog blogMainSection={props.state.blogMainSection} />}
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/account/*" element={<Account />}>
              <Route path="" element={<ContactInfo />} />
              <Route path="address" element={<Address />} />
              <Route path="wishList" element={<WishList />} />
              <Route path="history" element={<History />} />
            </Route>
            <Route path="/cart/*" element={<Cart />}>
              <Route path="" element={<PersonalInfoCart />} />
              <Route path="payment" element={<PaymentCart />} />
            </Route>
            <Route path="/error404" element={<Error404 />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
