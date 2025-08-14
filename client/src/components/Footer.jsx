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
        <div className="flex flex-col w-[350px]  h-full px-4">
          <div>
            <img src={Logo} alt="" className="w-full " />
          </div>
          <p className="pb-6 text-md text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex gap-4 items-center pb-3">
            <Phone size={18} />
            <p className="text-sm font-semibold">821387231723</p>
          </div>

          <div className="flex gap-4 items-center pb-3">
            <Mail size={18} />
            <p className="text-sm font-semibold">freightalliance@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <MapPin size={18} />
            <p className="text-sm font-semibold">
              USA, Sangas, 238239, ahds, 23892
            </p>
          </div>
        </div>

        <div className="flex gap-20 mt-12">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold pb-3">Getting Started</h4>
            {[
              { name: "Introduction" },
              { name: "Documentations" },
              { name: "Usages" },
              { name: "Global" },
              { name: "API" },
            ].map((item, i) => (
              <p
                key={i}
                className="text-sm pb-3  font-primary font-medium text-gray-900"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold pb-3">Company</h4>
            {[
              { name: "About Us" },
              { name: "Community" },
              { name: "Customers" },
              { name: "Contact Us" },
            ].map((item, i) => (
              <p
                key={i}
                className="text-sm pb-3  font-primary font-medium text-gray-900"
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold pb-3">Resources</h4>
            {[
              { name: "Support" },
              { name: "Security" },
              { name: "Help Center" },
              { name: "Privacy Policy" },
              { name: "Terms of Use" },
            ].map((item, i) => (
              <p
                key={i}
                className="text-sm pb-3  font-primary font-medium text-gray-900"
              >
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
