import React from "react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="frame">
        <div className="content">
          <p>Welcome To Our E-commerce Store.</p>
          <p>We offer a wide range of</p>
          <p>products to meet your</p>
          <p>needs.</p>
        </div>
      </div>
      <div className="background-image"></div>
      <div className="Author">
        <h2>𝕬𝖇𝖔𝖚𝖙 𝕸𝖊✍</h2>
        <p className="AuthorName">
          <strong>Author Name:</strong> 𝔸𝕗𝕠𝕝𝕒𝕓𝕚 𝕆𝕝𝕦𝕨𝕒𝕤𝕖𝕦𝕟 𝕁𝕠𝕙𝕟
        </p>
        <p className="Profession">
          <strong>Profession:</strong> 𝔽𝕣𝕠𝕟𝕥𝕖𝕟𝕕 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣
        </p>
        <p className="ProfessionDetail">
          As a Frontend Developer, I am dedicated to delivering user-friendly
          and visually appealing interfaces. This project is designed to offer
          users the comfort and convenience of exploring a diverse range of
          items in a store environment. Please note that this is a prototype,
          showcasing the potential functionality and user experience.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
