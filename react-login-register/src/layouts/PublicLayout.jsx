// Layout publik untuk halaman yang tidak memerlukan autentikasi
// import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return <Outlet />;
};

export default PublicLayout;
