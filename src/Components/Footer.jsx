import React from "react";

// Importing CSS module for styling
import Classes from "../Styles/Footer.module.css";

// Importing images and icons
import footerLogo from "../assets/footerlogo.jpg";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

// Footer functional component
function Footer() {
  return (
    // Main footer container
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        {/* === Social Links Section === */}
        <div className={Classes.socialLink}>
          {/* Contact number */}
          <p>9350317117</p>
          {/* Travel name or username */}
          <p>Deepak_Travel</p>

          {/* Social media icons */}
          <a href="">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="">
            <img src={github} alt="GitHub" />
          </a>
        </div>

        {/* === Logo Section === */}
        <div className={Classes.footerLogo}>
          {/* Clicking logo scrolls to hero section */}
          <a href="#hero">
            <img src={footerLogo} alt="Footer Logo" />
            <p>
              Deepak <span>Travels</span>
            </p>
          </a>
        </div>

        {/* === Subscription Section === */}
        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            Let us inspire your next gateway with new destinations and special
            deals
          </p>

          {/* Email input and subscribe button */}
          <div>
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Exporting the Footer component for use in other files
export default Footer;
