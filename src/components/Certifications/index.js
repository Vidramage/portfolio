import React, { useEffect, useState } from "react";
import "./index.scss"; // Import the CSS file containing styles for Portfolio and Modal
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";


const Certifications = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  const renderButtonWithSVG = (url, label) => {
    return (
      url && (
        <button className="flat-email-button-visit">
          <svg
            id="globe-id"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            viewBox="0 0 30 30"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
          </svg>
          <a className="download-link" href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </button>
      )
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Certifications".split("")}
            idx={15}
          />
        </h1>

        <div className="certifications-grid">
          <div className="certifications-column">
            <p className="certifications-text">
              Redux with ReactJS: Learn Redux with Modern React JS – Udemy: Online Courses, Issued March 2022 – No expiration Date –
              <a className="certification-link" href="https://www.udemy.com/certificate/UC-36e6eb64-75c2-4ed0-8b41-dd49508918af/" target="_blank" rel="noopener noreferrer">Certificate Link</a><br /><br />
              The Complete React Developer Course (w/ Hooks and Redux)  – Udemy: Online Courses, Issued June 2022 - No expiration Date -
              <a className="certification-link" href="https://www.udemy.com/certificate/UC-73a12e32-76bf-48fa-a152-e3a26f539d22/" target="_blank" rel="noopener noreferrer">Certificate Link</a><br /><br />
              Mastering TypeScript – 2022 Edition – Udemy: Online Courses, Issued August 2022 – No Expiration Date<br /><br />
              Web Development in 2019 from Concept to Masterpiece  – Udemy: Online Courses, Issued February 2019 - No expiration Date -
              <a className="certification-link" href="https://www.udemy.com/certificate/UC-HDYI6LEV/" target="_blank" rel="noopener noreferrer">Certificate Link</a><br /><br />
              Learn React.JS: The Basics – LinkedIn Learning – Issued October 2016 – No Expiration Date - <a classname="certification-link" href="https://www.linkedin.com/learning/certificates/84c39b4310db8580fea9cfecdc311b483677a96995b0363af337696883c370ad?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a>
            </p>
          </div>
          <div className="certifications-column">
            <p className="certifications-text">
              UX Design Techniques: Analyzing User Data – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/9760cc2c52c28e54ca959f68c8ebb72889d228fb488f55952e990f61f5c6ea12?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
              UX Design Techniques: Creating Personas – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/3ae189bfcc289b0252e99791039ffb5080a60f11cfab2f383c08f8d5d6bf76c9?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
              UX Design Techniques: Creating Scenarios and Storyboards – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/6b799b4d4b14845a817ca38dda1e058352c3ea0d9b83654e181f41d8def381a4?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
              UX Design Techniques: Ideation – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/f13e589f3aff882b247e2db98392478e515ba0040c954deac60712fb661b047d?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
              UX Design Techniques: Implementation Planning – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/dd6365a515da09b7ed934f74bbd90f9caa0a756615f2dab1797fc7f3ca636f37?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
              UX Design Techniques: Overview – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/e0c6dc2a05ea70ac191b6b32b4727c99707e55e21f91f9444a5f55b0751f3c56?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
              UX Design Techniques: Paper Prototyping – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/357e76a92a34758878402b0d1e30b3687a36fc8abbebdc8e2f63c34b19de3405?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
              UX Research Fundamentals – LinkedIn Learning – Issued October 2016 – No Expiration Date<br />
              <a className="certification-link" href="https://www.linkedin.com/learning/certificates/a39f820cc33d0826306f7c6a9b6dae7564ee09b864ae014ba2f6cf17f30fd9c5?trk=backfilled_certificate" target="_blank" rel="noopener noreferrer">Certificate Link</a><br />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Certifications;
