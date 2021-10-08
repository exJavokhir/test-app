import './footer.scss'
import './response.scss'

import {
    Facebook,
    Twitter,
    Pinterest
}from '../../assets/images/icons'

const Footer = ()=>{
    return (
        <div className="footer-wrapper">
            <div className="footer-wrapper_top">
                <div className="footer-wrapper_top__inner container">
                    <ul className="footer-ul alone">
                        <li className="footer-li"><a href="#link">Home</a></li>
                        <li className="footer-li"><a href="#link">About</a></li>
                        <li className="footer-li"><a href="#link">Projects</a></li>
                        <li className="footer-li"><a href="#link">Services</a></li>
                        <li className="footer-li"><a href="#link">Articles</a></li>
                        <li className="footer-li"><a href="#link">Contacts</a></li>
                    </ul>

                    <ul className="footer-ul">
                        <li className="footer-li"><a href="#link"><Facebook/></a></li>
                        <li className="footer-li"><a href="#link"><Twitter/></a></li>
                        <li className="footer-li"><a href="#link"><Pinterest /></a></li>
                        <li className="footer-li"><a href="#link"><Facebook/></a></li>
                    </ul>
                </div>
                
            </div>

            <div className="footer-wrapper_bottom">
                <div className="footer-wrapper_bottom__inner container">
                    <a className="footer-logo" href="#logo">mi business</a>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer