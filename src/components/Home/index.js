import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo';
import LogoTitle from '../../assets/images/logo-m.png';
import Loader from 'react-loaders'
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'c', 'h', 'a', 'e', 'l',',',' ', 'a']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
      ]

      useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 4000)
      },[])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span> 
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                    <img className='letter' src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22} />
                    </h1>
                    <h2>Frontend Developer / JavaScript Expert / Designer</h2>
                    <Link to="/portfolio" className='flat-email-button'>
                    <FontAwesomeIcon className="viewwork" icon={faFolderOpen} color="#fefdf9" />    
                        View Portfolio
                    </Link>
                    <Link to="/contact" className='flat-email-button'>
                    <FontAwesomeIcon className="contactclass" icon={faEnvelope} color="#fefdf9" />    
                        Get in touch
                    </Link>
                </div>
                <Logo />
                <Loader type="pacman" />
            </div>
        </>
    );
}

export default Home