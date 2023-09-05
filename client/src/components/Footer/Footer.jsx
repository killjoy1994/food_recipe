import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  console.log(location)
  return (
    (location.pathname !== "/auth") && <footer className="max-w-[1300px] mx-auto h-16 py-16 bg-white text-center">&copy; 2023 Your Company. All rights reserved.</footer>
  )
};

export default Footer;
