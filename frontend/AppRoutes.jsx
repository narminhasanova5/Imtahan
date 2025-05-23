import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Basket from "./pages/BAsket";
import AdminPanel from "./pages/AdminPAnel";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Wishlist from "./pages/WishList";


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/wish" element={<Wishlist/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;