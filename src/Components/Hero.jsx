import React, { useState } from "react";

// Importing CSS module for styling
import Classes from "../Styles/Hero.module.css";

// Importing the main banner image
import Banner from "../assets/hero.png";

function Hero() {
  // useState hook to control the modal visibility
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* === Modal Section (Shows confirmation after booking) === */}
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>We Receive your information</h5>

          {/* Button to close the modal */}
          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      {/* === Hero Section === */}
      <section id="hero" className={Classes.heroContainer}>
        {/* Hero image section */}
        <div className={Classes.heroimage}>
          <img src={Banner} alt="Travel Banner" />
        </div>

        {/* Content section on the right side */}
        <div className={Classes.content}>
          {/* Title and tagline */}
          <div className={Classes.title}>
            <h1>
              Travel & Explore With{" "}
              <span className={Classes.nickName}>Deepak Travels</span>
            </h1>
            <p>
              Save at least 15% on stays worldwide, from relaxing retreats to
              off-grid adventures
            </p>
          </div>

          {/* === Booking Form Section === */}
          <div className={Classes.bookingContainer}>
            {/* Input field for location */}
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <input type="text" placeholder="Search your location" />
            </div>

            {/* Input field for check-in date */}
            <div className={Classes.search}>
              <label>Check in</label>
              <input type="date" />
            </div>

            {/* Input field for check-out date */}
            <div className={Classes.search}>
              <label>Check out</label>
              <input type="date" />
            </div>

            {/* Book now button — opens modal when clicked */}
            <button onClick={() => setModal(true)}>Book Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

// Exporting the Hero component for use in App.js or other files
export default Hero;
