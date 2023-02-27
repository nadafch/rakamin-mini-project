import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";

function App() {
  return (
    <div className="w-full min-h-screen relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
