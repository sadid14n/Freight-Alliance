import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Logo from "../assets/FA-Logo.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="w-full  sticky top-5 z-50 ">
      <div className="w-[75%] mx-auto px-8  bg-gray-200  text-black drop-shadow-lg mt-5 h-14 rounded-full">
        <div className="flex items-center h-full px-4 gap-6">
          {/* Logo */}
          <div className="flex gap-4 items-center font-bold">
            <img src={Logo} alt="Logo" className="w-36" />
            {/* <p className="text-lightText">Freight Alliances</p> */}
          </div>

          {/* Nav List */}
          <ul className="flex gap-6 font-semibold ml-auto relative">
            <li>
              <Link
                to="/"
                className={`menu-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`menu-link  ${
                  location.pathname === "/about-us" ? " active" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className={`menu-link ${
                  location.pathname === "/pricing" ? "active" : ""
                }`}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/integrations" className="menu-link">
                Integrations
              </Link>
            </li>

            {/* Products with Chevron toggle */}
            <li className="relative group cursor-pointer flex items-center gap-1">
              <span className="text-lightText">Products</span>
              <div className="relative w-4 h-4">
                <ChevronDown className="absolute top-0 left-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0 text-lightText" />
                <ChevronUp className="absolute top-0 left-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100 text-lightText" />
              </div>

              {/* Submenu */}
              <ul className="absolute hidden group-hover:block top-full left-0 bg-primary text-black shadow-lg rounded-md p-2 space-y-2 w-64 z-50 ">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 rounded menu-link"
                  >
                    Ship Alliance (OMS)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 rounded  menu-link"
                  >
                    Freight Alliance (Transportation)
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-100 rounded  menu-link"
                  >
                    Fullfillment Alliance (Warehouse & Fullfilment)
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact-us" className="menu-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
