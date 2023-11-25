// Importing React library for creating React components
import React from "react";
// Importing the logo image
import logo from "../../images/logo.png";
// Functional component for the Footer
const Footer = () => (
  // The main container for the Footer, with flex layout and styling
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Trustless and Transparent</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Alchemy</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Smart Contracts</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">MetaMask</p>
      </div>
    </div>
  </div>
);
// Exporting the Footer component for use in other parts of the application
export default Footer;
