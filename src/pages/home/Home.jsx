import { useState } from 'react'
import './home.scss'
import './response.scss'

import {
    Facebook,
    Twitter,
    Pinterest
}from '../../assets/images/icons'

import Photo1 from '../../assets/images/photo1.jpg'
import Photo2 from '../../assets/images/photo2.jpg'
import Photo3 from '../../assets/images/photo3.jpg'
import Photo4 from '../../assets/images/photo4.jpg'

import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'
import Image3 from '../../assets/images/image3.png'



import Header from '../../container/header/Header'
import Footer from '../../container/footer/Footer'

const Home = ()=>{

    const [active, setActive] = useState(false)

    return (
        <div className={`home-wrapper ${active ? 'active' : ' '}`}>
            <div className="header">
                <Header 
                    setActive={setActive}
                    active={active}
                />
            </div>

            <div className="hero-place" id="home">
                <div className="hero-place__inner container">

                    <div className="hero-place_socials">
                        <ul className="hero-place_socials__ul">
                            <li className="hero-place_socials__ul--li">
                                <a href="#facebook">
                                    <Facebook /></a>
                            </li>
                            <li className="hero-place_socials__ul--li">
                                <a href="#twitter">
                                    <Twitter /></a>
                            </li>
                            <li className="hero-place_socials__ul--li">
                                <a href="#pinterest">
                                    <Pinterest /></a>
                            </li>
                        </ul>
                    </div>

                    <div className="hero-place_title">

                        <div className="hero-place_title--name">
                            <h1>
                                How do you design content for every language
                            </h1>
                        </div>
                        <div className="hero-place_title--text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum sunt temporibus quia maiores
                                natus placeat inventore perspiciatis soluta, repudiandae molestias vitae, ipsa excepturi
                                voluptate
                            </p>
                        </div>
                        <div className="hero-place_title--link">
                            <a className="primary-btn" href="#work">Work with us</a>
                        </div>

                        <div className="scroll">
                            <a href="#intro">Scroll</a>
                        </div>

                    </div>
                </div>


                <div className="hero-place_blue">
                    <img src={Photo1} alt="" />
                </div>
            </div>

            <div className="main-section" id="intro">
                <div className="main-section_blue"
                    style={{
                        backgroundImage: `url(${Photo2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>
                <div className="main-section_inner container">
                    <div className="main-section_inner__contents">

                        <div className="main-section_inner__contents--left">
                            <h2>
                                Delighting customers in over 200 cities in the world.
                            </h2>

                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio cum praesentium alias repellat, quia aliquid dolorum quasi omnis autem nulla. Ab ut iure
                            </p>

                            <a className="primary-btn" href="#link">find our more</a>
                        </div>
                        <div className="main-section_inner__contents--right"
                            style={{
                                backgroundImage: `url(${Photo3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <span>
                                Delighting customers in over <br /> 200 cities in the world.
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="experties-cards" id="exper">
                <div className="experties-cards_inner container">
                    <div className="experties-cards_inner__holder">
                        <h1>Our Expertises</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempora sequi pariatur harum expedita reiciendis vitae inventore! Accusamus,</p>
                    </div>

                    <div className="cards-wrapper">
                        <div className="cards">
                            <img src={Image1} alt="" />
                            <h4>Research</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste modi aspernatur reprehenderit</p>
                            <a className="primary-btn" href="#card">Find out more</a>
                        </div>
                        <div className="cards">
                            <img src={Image2} alt="" />
                            <h4>Content</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste modi aspernatur reprehenderit</p>
                            <a className="primary-btn" href="#card">Find out more</a>
                        </div>
                        <div className="cards">
                            <img src={Image3} alt="" />
                            <h4>Product Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste modi aspernatur reprehenderit</p>
                            <a className="primary-btn" href="#card">Find out more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="last-section" id="work"
                style={{
                    backgroundImage: `url(${Photo4})`
                }}
            >
                <div className="overlay"></div>
                <div className="last-section_inner container">
                    <h1 className="last-section_inner--name">
                        How dou you design content <br /> every language
                    </h1>
                    <p className="last-section_inner--title">
                        Lorem ipsum dolor sit ametelit. Cum, corrupti, earum perferendis nesciunt officia doloribus laboriosam <br /> enim laudant Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab eius
                    </p>
                    <a className="last-section_inner--link" href="#last">Work with us</a>
                </div>
            </div>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Home