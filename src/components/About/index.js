import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Headshot from '../../assets/images/frequencyseparation348.jpeg'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
      },[])

    return (
        
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>My name is Michael Mahrt. I am a very ambitious, passionate, and innovative front-end developer with a pension for Accessibility and industry best practices, looking for a role in an established company. I embrace the opportunity to work with modern technologies on challenging and diverse projects. I am consistently driven to build modern, aesthetic, valuable and meaningful digital experiences with HTML5/CSS3/JavaScript/React. I work hard to collaborate and communicate with team members and stakeholders when appropriate and I am always interested in explaining my thinking process and helping others. </p>
                <p>I'm confident, naturally curious, and perpetually working on improving my web developer skills one problem at a time. I'm always looking to improve websites through multiple aspects including accessibility, performance, usability, design, and much more. It's important to me to build meaningful and impactful relationships with clients and colleagues while improving the bottom line through development, design, and business solutions.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </div>
        
    )
}

export default About