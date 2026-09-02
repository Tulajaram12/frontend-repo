import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/products" element={<Products />} />

          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
