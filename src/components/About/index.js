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
                <p>I'm Michael Mahrt, an ambitious and innovative front-end developer focused on Accessibility and industry best practices. Seeking a role in an established company, I thrive on leveraging modern technologies for diverse and challenging projects. My passion lies in crafting modern, aesthetic, and valuable digital experiences using HTML5, CSS3, JavaScript, Vue.JS, PHP, and React. A dedicated collaborator, I prioritize effective communication with team members and stakeholders. I'm driven by curiosity, constantly enhancing my web development skills, and dedicated to optimizing websites for accessibility, performance, usability, and design. I prioritize fostering meaningful relationships with clients and colleagues, contributing to development, design, and business solutions to enhance the bottom line. </p>
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