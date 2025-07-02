import React from "react";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact"],
  },
  {
    title: "Support",
    links: ["Help Center", "Returns", "Shipping"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Disclaimer"],
  },
  {
    title: "Account",
    links: ["Login", "Register", "Orders"],
  },
  {
    title: "Explore",
    links: ["Blog", "Offers", "Locations"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="border-b border-gray-300"></div>

      <div className="flex justify-center gap-20 py-6 flex-wrap text-center text-sm text-gray-700">
        {footerLinks.map((section, index) => (
          <div key={index} className="space-y-1">
            {section.links.map((link, idx) => (
              <p key={idx} className="hover:underline cursor-pointer">
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pb-6">
        <FontAwesomeIcon
          icon={faSquareTwitter}
          className="w-5 h-5 text-gray-700 hover:text-blue-500"
        />
        <FontAwesomeIcon
          icon={faSquareInstagram}
          className="w-5 h-5 text-gray-700 hover:text-pink-500"
        />
        <FontAwesomeIcon
          icon={faSquareFacebook}
          className="w-5 h-5 text-gray-700 hover:text-blue-700"
        />
      </div>

      <p className="text-center text-xs text-gray-500 pb-6">
        © 2024 HouseWife Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
