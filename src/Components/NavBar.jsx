import React, { useState } from "react";

// Importing CSS module for styling
import Classes from "../Styles/NavBar.module.css";

// Importing FontAwesome icons for the menu toggle (hamburger and close icons)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  // State to handle the opening and closing of the mobile menu
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* === Navigation Bar Section === */}
      <nav className={Classes.Navbar}>
        {/* === Brand Logo Section === */}
        <div className={Classes.brand}>
          <h1 className={Classes.NavLogo}>
            Deepak <span>Travels</span>
          </h1>

          {/* === Hamburger Icon for Mobile Menu === */}
          <div className={Classes.hamburger}>
            {/* Conditional rendering: show close icon when menu is open */}
            {toggle ? (
              <FontAwesomeIcon
                icon={faClose}
                className={Classes.menuIcon}
                onClick={() => setToggle(false)} // Close menu on click
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className={Classes.menuIcon}
                onClick={() => setToggle(true)} // Open menu on click
              />
            )}
          </div>
        </div>

        {/* === Navigation Links Section === */}
        {/* Apply 'open' class only when toggle is true (menu open) */}
        <ul className={toggle ? Classes.open : ""}>
          <li>
            <a href="#hero" className={Classes.active}>
              home
            </a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#recommendation">places</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
        </ul>

        {/* === Connect Button === */}
        <button className={Classes.NavBtn}>connect</button>
      </nav>
    </>
  );
}

// Exporting the NavBar component for use in App.js or other pages
export default NavBar;
