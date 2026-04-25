import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="luxury-footer text-light pt-5">

      <div className="container">
        <div className="row">

          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <h3 className="footer-logo">Glow Beauty Salon</h3>

            <p className="mt-3">
              Discover premium beauty services including bridal makeup,
              hair styling, skin treatments, and luxury salon experiences.
            </p>

            <div className="social-icons mt-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="footer-heading">Quick Links</h5>

            <ul className="footer-links">

              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/services">Services</NavLink>
              </li>

              <li>
                <NavLink to="/offers">Offers / Packages</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Our Services</h5>

            <ul className="footer-links">
              <li>Bridal Makeup</li>
              <li>Hair Styling</li>
              <li>Facial Treatments</li>
              <li>Nail Art</li>
              <li>Skin Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Contact Us</h5>

            <p><FaMapMarkerAlt /> MG Road, Indore, India</p>

            <p><FaPhoneAlt /> +91 9109010442</p>

            <p><FaEnvelope /> info@beautysalon.com</p>
          </div>

        </div>
      </div>

      {/* Gold Divider */}
      <div className="footer-divider mt-4"></div>

      {/* Bottom Bar */}
      <div className="text-center py-3 footer-bottom">

        © 2026 Glow Beauty Salon | Crafted With Care ✨

        <div className="made-by">
          Made with ❤️ by <span>Club-Anantaya</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;