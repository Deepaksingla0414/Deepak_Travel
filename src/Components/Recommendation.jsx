import React, { useState } from "react";

// Importing CSS file for styling
import "../Styles/Recommendation.css";

// Importing images for destinations
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

// Importing icons used in info section
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  // useState hook to track which package category is currently active
  const [active, setActive] = useState();

  // === Destination data array ===
  // Each object contains details about one destination
  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  // === Categories for travel packages ===
  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    // === Main Section for Recommendations ===
    <section id="recommendation" className="recommendation">
      {/* === Section Title and Category Bar === */}
      <div className="title">
        <h1>Recommend</h1>

        {/* === Category Tabs === */}
        <div className="CategoryBar">
          <ul>
            {/* Loop through the packages and display each as a clickable tab */}
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  // Add "Active" class to highlight selected category
                  className={active === index + 1 ? "Active" : ""}
                  // When clicked, set active state to the selected index
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* === Recommendation Cards Section === */}
      <div className="recommendationBox">
        {/* Looping through each destination to display travel cards */}
        {data.map((item, index) => {
          return (
            <div className="box" key={index}>
              {/* Destination Image */}
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>

              {/* Destination Title and Subtitle */}
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              {/* Price and Info Icons */}
              <div className="price">
                <div>
                  <img src={info1} alt="info1" />
                  <img src={info2} alt="info2" />
                  <img src={info3} alt="info3" />
                </div>

                {/* Trip Cost */}
                <p>${item.cost}</p>
              </div>

              {/* Additional Trip Details */}
              <div className="details">
                <p>1500 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Exporting Recommendation component for use in App.js or other components
export default Recommendation;
