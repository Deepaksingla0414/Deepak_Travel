import React, { useState } from "react";

// Importing logo image used for the scroll-to-top button
import logo from "../assets/logo.svg";

// Importing styled-components for creating custom styled elements
import styled from "styled-components";

// === ScrollToTop Component ===
export default function ScrollToTop() {
  // State to track whether the scroll-to-top button should be visible
  const [scrollState, setScrollState] = useState(false);

  // Event listener: detects scroll position on the page
  window.addEventListener("scroll", () => {
    // If the page is scrolled more than 200px, show the button
    // Otherwise, hide it
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });

  // Function to smoothly scroll the window to the top
  const toTop = () => {
    window.scroll({ top: 0 });
  };

  return (
    // Styled div component (ToTop) with scrollState as a prop
    <ToTop scrollState={scrollState}>
      {/* Logo button that scrolls page to top when clicked */}
      <img src={logo} alt="Scroll to top" onClick={toTop} />
    </ToTop>
  );
}

// === Styled Component (CSS-in-JS) ===
// This defines how the scroll-to-top button looks and behaves
const ToTop = styled.div`
  /* Show or hide based on scrollState */
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};

  /* Fixed position in bottom-right corner */
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  z-index: 999 !important;

  /* Styling for the logo image */
  img {
    width: 35px;
    height: 35px;
    background-color: rgb(243, 111, 9);
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
  }

  /* === Responsive styling for smaller screens === */
  @media screen and (max-width: 450px) {
    bottom: 1.5rem;
    right: 1rem;
  }
`;
