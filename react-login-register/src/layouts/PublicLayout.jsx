// Layout publik untuk halaman yang tidak memerlukan autentikasi
// import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  console.log("masuk public route");
  return (
    <div>
      {/* Navbar atau komponen lainnya */}
      <Outlet /> {/* Render rute anak */}
    </div>
  );
};

export default PublicLayout;
