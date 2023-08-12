import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


export default class PortfolioImages extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={4200}
      >
        {this.props.images.map((image, index) => (
          <div key={index} style={{ background: `url(${image}) center/cover no-repeat` }} />
        ))}
      </Carousel>
    );
  }
}
