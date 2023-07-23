import React, { useEffect, useState } from "react";
import "./index.scss";
import AnimatedLetters from '../AnimatedLetters';
import Loader from "react-loaders";
import portfolioData from '../../data/portfolio.json';
import Testimonials from "./testimonials";
import Modal from "./modal"

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpenModal = () => {
    setIsOpen(true);
    };

    const handleCloseModal = () => {
    setIsOpen(false);
    };
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div className="content">
                                    {
                                      (port.page).length + (port.title).length > 60 ? <h4 className="titleSmall"><span className="pageBold">{port.page}</span><span>{port.title}</span></h4> : <h4 className="title"><span className="pageBold">{port.page}</span><span>{port.title}</span></h4>
                                    }
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => {window.open(port.url)}}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15}
                    >

                    </AnimatedLetters>
                </h1>
                {/* <h2 className="testimonials">Testimonials:</h2> */}
                <Testimonials data={portfolioData.portfolio}/>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
// import AnimatedLetters from "../AnimatedLetters";
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

// const Portfolio = () => { 
//     const [letterClass, setLetterClass] = useState('text-animate');
//     const [portfolio, setPortfolio] = useState([]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLetterClass('text-animate-hover');
//         }, 3000);

//         return () => {
//             clearTimeout(timer);
//         }
//     });

//     useEffect(() => {
//         getPortfolio();
//     }, []);

//     const getPortfolio = async () => {
//         const querySnapshot = await getDocs(collection(db, 'portfolio'));
//         setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
//     }

//     console.log(portfolio);

//     const renderPortfolio = (portfolio) => {
//         return (
//             <div className="images-container">
//                 {
//                     portfolio.map((port, idx) => {
//                         return (
//                             <div className="image-box" key={idx}>
//                                 <img 
//                                 src={port.image}
//                                 className="portfolio-image"
//                                 alt="portfolio" />
//                                 <div className="content">
//                                     <p className="title">{port.name}</p>
//                                     <h4 className="description">{port.description}</h4>
//                                     <button
//                                         className="btn"
//                                         onClick={() => window.open(port.url)}
//                                     >View</button>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         );
//     }


//     return (
//         <>
//             <div className="container portfolio-page">
//                 <h1 className="page-title">
//                     <AnimatedLetters
//                         letterClass={letterClass}
//                         strArray={"Portfolio".split("")}
//                         idx={15}
//                     />
//                 </h1>
//                 <div>{renderPortfolio(portfolio)}</div>
//             </div>
//             <Loader type="pacman" />
//         </>
//     );
// }

export default Portfolio;