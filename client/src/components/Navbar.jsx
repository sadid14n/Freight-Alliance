import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Logo from "../assets/FA-Logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false); // for mobile dropdown

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:block sticky top-5 z-50">
        <div className="w-[75%] mx-auto px-8 bg-gray-200 text-black drop-shadow-lg mt-5 h-14 3xl:h-[70px] 4xl:h-[90px] 5xl:h-[150px] rounded-full flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-36 2xl:w-[160px] 3xl:w-[180px] 4xl:w-[260px] 5xl:w-[380px]"
          />
          <ul className="flex gap-6 font-semibold ml-auto">
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
                className={`menu-link ${
                  location.pathname === "/about-us" ? "active" : ""
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

            {/* Products Dropdown (Desktop) */}
            <li className="relative group cursor-pointer flex items-center gap-1">
              <span className="text-[16px] 2xl:text-[20px] 3xl:text-[24px] 4xl:text-[30px] 5xl:text-[46px] 4xl:px-2 5xl:px-3 font-medium">
                Products
              </span>
              <div className="relative w-4 h-4">
                <ChevronDown className="absolute top-0 left-0 w-4 h-4 transition-opacity duration-200 opacity-100 group-hover:opacity-0 text-lightText" />
                <ChevronUp className="absolute top-0 left-0 w-4 h-4 transition-opacity duration-200 opacity-0 group-hover:opacity-100 text-lightText" />
              </div>

              {/* Submenu */}
              <div className="absolute hidden group-hover:block top-full left-0 bg-slate-200 rounded-lg shadow-lg p-2 space-y-2 w-[300px] z-50">
                <ul className="text-black">
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
                      className="block px-4 py-2 hover:bg-gray-100 rounded menu-link"
                    >
                      Freight Alliance (Transportation)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-gray-100 rounded menu-link"
                    >
                      Fulfillment Alliance (Warehouse & Fulfillment)
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/integrations" className="menu-link">
                Integrations
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="menu-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden fixed top-0 left-0 w-[95%] mx-4 my-2 rounded-full bg-gray-200 h-14 flex items-center justify-between px-6 z-50">
        <img src={Logo} alt="Logo" className="w-28" />
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 rounded-full"
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Full-Screen Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col m-2 rounded-full">
          {/* Top Section with Logo + Close */}
          <div className="flex bg-gray-200 items-center justify-between px-6 py-4 border-b border-gray-300">
            <img src={Logo} alt="Logo" className="w-32" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full"
            >
              <X size={32} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col bg-white rounded-b-2xl h-full pt-8 space-y-6 px-6 text-lg font-semibold">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`menu-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`menu-link ${
                location.pathname === "/about-us" ? "active" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`menu-link ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/integrations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu-link"
            >
              Integrations
            </Link>

            {/* Products Dropdown (Mobile) */}
            <div>
              <button
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center justify-between w-full"
              >
                <span className="text-gray-700 font-semibold">Products</span>
                {isMobileProductsOpen ? <ChevronUp /> : <ChevronDown />}
              </button>

              {isMobileProductsOpen && (
                <div className="ml-4 mt-2 space-y-5 p-4 bg-green-50">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block menu-link"
                  >
                    Ship Alliance (OMS)
                  </Link>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block menu-link"
                  >
                    Freight Alliance (Transportation)
                  </Link>
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block menu-link"
                  >
                    Fulfillment Alliance (Warehouse & Fulfillment)
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu-link"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
