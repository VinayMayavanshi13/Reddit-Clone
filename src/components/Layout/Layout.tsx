import React from "react";
import Navbar from "../Navbar/Navbar";

// type LayoutProps = {
//   children: React.ReactNode;
// }

// const Layout = (props: LayoutProps) => {
//   return (
//     <div>
//       <Navbar />
//       <main>{props.children}</main>
//     </div>
//   );
// }

// const Layout:React.FC = ({ children }) => {

//  return (
//     <>
//       <Navbar />
//       <main>{children}</main>
//     </>
//   );
// };

// export default Layout;

// const Layout = props => ({}) => {

//   return (
//      <>
//        <Navbar />
//        {props.children}
//      </>
//    );
//  };
 
//  export default Layout;

const Layout= ({ children }) => {

  return (
     <>
       <Navbar />
       <main>{children}</main>
     </>
   );
 };
 
 export default Layout;