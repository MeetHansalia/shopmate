import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact/Contact";
import ContactIn from "../pages/Contact/ContactIn";
import ContactEn from "../pages/Contact/ContactEn";
import ContactUs from "../pages/Contact/ContactUs";
import Admin from "../pages/Admin";
import PageNotFound from "../pages/PageNotFound";


const AllRoutes = () => {
    const user = true;
  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="products" element={<ProductList/>}/>
          <Route path="products/:id" element={<ProductDetail/>}/>
          <Route path="contact" element={<Contact/>}>
            <Route path="in" element={<ContactIn/>}/>
            <Route path="eu" element={<ContactEn/>}/>
            <Route path="us" element={<ContactUs/>}/>
            {/* <Route path="*" element={<ContactUs/>}/> */}
          </Route>
          <Route path="/admin" element={user ? <Admin/> : <Navigate to="/"/>} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>   
    </>
  )
}

export default AllRoutes
