import React from "react";
import Routers from "../Routes/Routers";
import { Header } from "../Components/Header";
import Footer from "../Components/Footer";
import Helmert from "../Components/Helmert/Helmert";
import AdminNav from "../admin/AdminNav";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Helmert title={"home"}></Helmert>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
