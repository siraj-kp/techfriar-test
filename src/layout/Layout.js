import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";
import Header from "../components/header/Header";
import MainPage from "../pages/MainPage";

const Layout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <MainPage />
      </div>
    </div>
  );
};

export default Layout;
