import React, { useEffect, useState } from "react";
import "./index.scss"; // Import the CSS file containing styles for Portfolio and Modal
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import portfolioData from '../../data/portfolio.json';
import Testimonials from "./testimonials";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  const handleOpenModal = (project) => {
    setSelectedItem(project);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  
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
          <a href={url} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </button>
      )
    );
  };

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map((port) => {
            return (
              <div className="image-box" key={port.id}>
                <img
                  src={port.cover}
                  className="portfolio-image"
                  alt="portfolio"
                />
                <div className="content">
                  {
                    (port.page + port.title).length > 60 ? (
                      <h4 className="titleSmall">
                        <span className="pageBold">{port.page}</span>
                        <div>{port.title}</div>
                      </h4>
                    ) : (
                      <h4 className="title">
                        <span className="pageBold">{port.page}</span>
                        <span>{port.title}</span>
                      </h4>
                    )
                  }
                  <h4 className="description">{port.description}</h4>
                  <button className="btn" onClick={() => handleOpenModal(port)}>View</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <Testimonials data={portfolioData.portfolio} />
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      {selectedItem && (
        // Full-screen modal
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedItem.page}{selectedItem.title}</h2>
            <h3>{selectedItem.description}</h3>
            <div className="button-container">
              {renderButtonWithSVG(selectedItem.urlOne, "Visit URL One")}
              {renderButtonWithSVG(selectedItem.urlTwo, "Visit URL Two")}
              {renderButtonWithSVG(selectedItem.urlThree, "Visit URL Three")}
            </div>
            <Carousel className="modal-carousel">
              {selectedItem.images.map((image, index) => (
                <img className={`image-${index}`} key={index} src={image} alt={`Project ${index + 1}`} />
              ))}
            </Carousel>
          </div>
        </div>
      )}
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
