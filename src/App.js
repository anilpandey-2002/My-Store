import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar onSearchChange={handleSearchChange} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
