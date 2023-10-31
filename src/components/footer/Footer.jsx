import React from "react";
import "./footer.css";
import nftlogo from "../../assets/logo.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <div>
            <img src={nftlogo} alt="logo" />
            <p>Vidrios A&A</p>
          </div>
          <div>
            <h3>Get the lastes Updates</h3>
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Email Me!</button>
          </div>
        </div>
        <div className="footer-links_div">
          <h4>Horarios</h4>
          <p>Lun-Vie</p>
          <p>How it Works</p>
          <p>Counters</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-links_div">
          <h4>Ubicacion</h4>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
          <p> © {new Date().getFullYear()} Vidrios A&A. All Rights Reserved</p>
        </div>
        <div>
          <AiOutlineInstagram size={25} color="white" className="footer-icon" />
          <FaWhatsapp size={25} color="white" className="footer-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
