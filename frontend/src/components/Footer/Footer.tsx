import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'
const Footer:React.FC =()=>{
    return(
        <footer>
            <div className="social-container">
             <h3>Social Follow</h3>
             <div>
                <a href="https://www.youtube.com/channel/UCcg259D5TPWaGDrg49hYUAA"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/skylabcoders/"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/skylabcoders?lang=es" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/skylabcoders/?hl=es"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
             </div>
           </div>
        
       </footer>
    )
}
export default Footer