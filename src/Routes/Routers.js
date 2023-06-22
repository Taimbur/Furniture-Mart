import React from 'react'
import Home from '../Pages/Home';
import Checkout from '../Pages/Checkout';
import Cart from '../Pages/Cart';
import Login from '../Pages/Login';
import ProductDetails from '../Pages/ProductDetails';
import Shop from '../Pages/Shop';
import SignUp from '../Pages/SignUp';
import { Routes, Route } from "react-router-dom";
import ProtectRoute from './ProtectRoute';
import AddProduct from '../admin/AddProduct';
import AllProducts from '../admin/AllProducts';
import Dashbroad from '../admin/Dashbroad';
import User from '../admin/User';
const Routers = () => {
    return (
        <Routes>
            <Route path='' element={<Home />} />
            {/* <Route path='checkout' element={<ProtectRoute><Checkout /></ProtectRoute>} /> */}
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<Login />} />
            <Route path='shop/:id' element={<ProductDetails />} />
            <Route path='shop' element={<Shop />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='/*' element={<ProtectRoute />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='dashboard' element={<Dashbroad />} />
            <Route path='dashboard/all-products' element={<AllProducts />} />
            <Route path='dashboard/add-products' element={<AddProduct />} />
            <Route path='dashboard/user' element={<User />} />
        </Routes>



    )
}

export default Routers;