import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Logo from "../assets/FA-Logo.svg";
import Insta from "../assets/insta.svg";
import FB from "../assets/fb.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-[90%] mx-auto h-full   px-14 py-10 ">
      <div className="flex justify-between">
        <div className="flex flex-col w-[350px] 2xl:w-[450px] 3xl:w-[550px] 4xl:w-[700px] 5xl:w-[1100px]  h-full px-4">
          <div>
            <img src={Logo} alt="" className="w-full " />
          </div>
          <p className="pb-6 text-md 2xl:text-[18px] 3xl:text-[24px] 4xl:text-[30px] 5xl:text-[44px] text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex gap-4 items-center pb-3">
            <Phone size={18} className="footer-icon" />
            <p className=" footer-contact">821387231723</p>
          </div>

          <div className="flex gap-4 items-center pb-3">
            <Mail className="footer-icon" />
            <p className="footer-contact">freightalliance@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <MapPin className="footer-icon" />
            <p className="footer-contact">USA, Sangas, 238239, ahds, 23892</p>
          </div>
        </div>

        <div className="flex gap-20 mt-12">
          <div className="flex flex-col">
            <h4 className="footer-section-heading">Getting Started</h4>
            {[
              { name: "Introduction" },
              { name: "Documentations" },
              { name: "Usages" },
              { name: "Global" },
              { name: "API" },
            ].map((item, i) => (
              <p key={i} className="footer-section-content">
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="footer-section-heading">Company</h4>
            {[
              { name: "About Us" },
              { name: "Community" },
              { name: "Customers" },
              { name: "Contact Us" },
            ].map((item, i) => (
              <p key={i} className="footer-section-content">
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="footer-section-heading">Resources</h4>
            {[
              { name: "Support" },
              { name: "Security" },
              { name: "Help Center" },
              { name: "Privacy Policy" },
              { name: "Terms of Use" },
            ].map((item, i) => (
              <p key={i} className="footer-section-content">
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      <hr className="mt-14 text-gray-200" />

      <div className="flex justify-between mt-10">
        <p>&copy;{year} Freight Alliance - All rights reserved</p>
        <div className="flex gap-4">
          <img src={FB} alt="" className="w-6 h-6" />
          <img src={Insta} alt="" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
