import React from "react";
import './style/ani.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <>
            <div className="container-fluid footer d-flex flex-column align-items-center">
                <div className="comp-dtls d-flex flex-row mt-3">
                  
                    <div className="container1">
                        <h3 className="">Leftover Lifeline</h3>
                        <p className="">Nourish the Needy</p>
                    </div>

                </div>
                
                <div className="social-icons">
                    <a href="https://www.facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
                    <a href="https://www.twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} size="1x" /></a>
                    <a href="https://www.instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                </div>
                <div className="copy-right">
                    <span className="" style={{fontSize:'small'}}>Copyrights @ leflif.org. All rights reserved.</span>

                </div>
            </div>
        </>
    );
}

export default Footer;
