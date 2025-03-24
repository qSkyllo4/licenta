import React from "react";
import "./AboutUs.css"; // Import CSS for styling

const AboutUs = () => {
  return (
    <div className="container">
      <h2>About Us</h2>
      <div className="about-content">
        <p>
          Welcome to <strong>Car Auction</strong>, your trusted platform for buying and selling vehicles with ease and transparency. Our mission is to provide a seamless and enjoyable experience for car enthusiasts, sellers, and buyers alike.
        </p>
        <p>
          Whether you're looking for your dream car or want to sell your vehicle, we've got you covered. Our platform offers a wide range of cars, from vintage classics to modern marvels, all at competitive prices.
        </p>
        <p>
          At Car Auction, we believe in:
        </p>
        <ul>
          <li>Transparency in every transaction</li>
          <li>Exceptional customer service</li>
          <li>Secure and reliable bidding</li>
          <li>Fair prices for buyers and sellers</li>
        </ul>
        <p>
          Join us today and experience the future of car auctions!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;