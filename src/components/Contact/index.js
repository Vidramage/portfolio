import './index.scss'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import { useEffect, useState } from 'react'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f2c439e0-17e1-11ed-98e8-53e0970ab51c";

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const [submitted, setSubmitted] = useState(false)
    

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
      },[])

    const handleSubmit = () => {
        setTimeout(()=> {
            setSubmitted(true);
        }, 100)
    }


    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','m','e']}
                            letterClass={letterClass}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities, especially ambitious or large projects. However, if you have other requests or questions, please don't hesitate to contact me using the form below.
                    </p>
                    <div className="contact-form">
                        <form action={FORM_ENDPOINT}
                              onSubmit={handleSubmit}
                              method="POST"
                              target="_blank"
                        >
                            <ul>
                                <li className="half">
                                    <input type="text" name="user_name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input
                                    type="email"
                                    name="user_email"
                                    placeholder="E-mail"
                                    required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" required>
                                    </textarea>
                                </li>
                                    <button type="submit" className="flat-email-button" value="SEND" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168 4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34-5.269-2.306L16 9.167l-7.649 4.25-2.932-1.283 13.471-6.34-.793 11.886z"></path></svg>Hit me up</button>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Michael Mahrt,
                    <br />
                    Granada Hills, CA, USA
                    <br />
                    <span>mikem255@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[34.2794, -118.5022]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[34.2794, -118.5022]}>
                            <Popup>Michael lives here, come over for a cup of coffee! :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            <Loader type="pacman" />
            </div>
        </>
    )
}

export default Contact