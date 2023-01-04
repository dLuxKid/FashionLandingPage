import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerBrief">
        <h3>FASHION</h3>
        <p>Complete your style with awesome clothes from us </p>
        <div className="footerSocials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.comF" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="footerNavigation">
        <div className="footerNavigation_Container">
          <h4>Company</h4>
          <p>About</p>
          <p>Contact Us</p>
          <p>Support</p>
          <p>Careers</p>
        </div>
        <div className="footerNavigation_Container">
          <h4>Quick Link</h4>
          <p>Share Location</p>
          <p>Order Tracking</p>
          <p>Size Guide</p>
          <p>FAQs</p>
        </div>
        <div className="footerNavigation_Container">
          <h4>Legal</h4>
          <p>Term and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
