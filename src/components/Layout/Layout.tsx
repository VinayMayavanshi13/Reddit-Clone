import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout: React.FC = ({ Children }) => {
 return (
    <>
      <Navbar />
      <main>{Children}</main>
    </>
  );
};

export default Layout;