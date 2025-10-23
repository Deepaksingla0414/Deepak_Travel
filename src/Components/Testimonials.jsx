import React from "react";

// Importing CSS module for styling
import Classes from "../Styles/Testimonials.module.css";

// Importing customer avatars
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

// Importing FontAwesome icon for quote symbol
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    // === Main Testimonials Section ===
    <section id="testimonials" className={Classes.testimonials}>
      {/* Section Title */}
      <h1>Happy Customers</h1>

      {/* Container for all testimonial boxes */}
      <div className={Classes.boxContainer}>
        {/* === Testimonial 1 === */}
        <div className={Classes.testimonialBox}>
          {/* Quote icon */}
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          
          {/* Customer feedback */}
          <p>
            Samim travel has such a user-friendly website. Easy to navigate,
            search and fiddle with dates instead of having to call up. Once
            decided, the booking process was swift and easy, thank you.
          </p>

          {/* Customer info */}
          <div className={Classes.info}>
            <img src={avatar} alt="Rahi Ahmed" />
            <div>
              <h3>Rahi Ahmed</h3>
              <span>CEO • webtechbyrahi channel</span>
            </div>
          </div>
        </div>

        {/* === Testimonial 2 === */}
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <p>
            Great communication. This was a rushed booking and she was very
            helpful/prompt with calls/replies to ensure we could have preferred
            dates.
          </p>

          <div className={Classes.info}>
            <img src={avatar2} alt="Anthony Tony" />
            <div>
              <h3>Anthony Tony</h3>
              <span>Researcher • wikipedia.com</span>
            </div>
          </div>
        </div>

        {/* === Testimonial 3 === */}
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
            I must say the service we received from this company was amazing and
            would recommend them to anyone to trust and use them. The rewards you
            get with your holidays are just fantastic.
          </p>

          <div className={Classes.info}>
            <img src={avatar3} alt="John Lee" />
            <div>
              <h3>John Lee</h3>
              <span>CEO • Grand Thornton</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Exporting Testimonials component for use in other parts of the app
export default Testimonials;
