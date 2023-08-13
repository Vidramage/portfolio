import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const scott = require('../../assets/images/scott.jpg');
const britiana = require('../../assets/images/britiana.jpg');
const jared = require('../../assets/images/jared.jpg');
const clark = require('../../assets/images/clark.jpg');

export default class Testimonials extends Component {
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
          <div>
          <img src={scott} alt="Scott Adrian"/>
            <div className="myCarousel">
              <h3>Scott Adrian</h3>
              <h4>Senior Web Developer @ Redis.com</h4>
              <div>
                {
                    this.props.data[1].testimonialOne
                }
              </div>
            </div>
          </div>
  
          <div>
          <img src={britiana} alt="Britiana Andrade"/>
            <div className="myCarousel">
              <h3>Britiana Andrade</h3>
              <h4>Marketing Manager Executive Communications & CxO Programs @ Redis.com</h4>
              <div>
                {
                    this.props.data[1].testimonialTwo
                }
              </div>
            </div>
          </div>
  
          <div>
          <img src={jared} alt="Jared East"/>
            <div className="myCarousel">
              <h3>Jared East</h3>
              <h4>Head of Product @ Rently.com</h4>
              {
                    this.props.data[1].testimonialThree
              }
            </div>
          </div>

          <div>
          <img src={clark} alt="Clark Li"/>
            <div className="myCarousel">
              <h3>Clark Li</h3>
              <h4>CTO @ Rently.com</h4>
              {
                this.props.data[1].testimonialFour
              }
            </div>
          </div>
        </Carousel>
      );
    }
  }