import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (
    <div className='footer center'>
        <a href="https://github.com/AyushJamdare">
            <FontAwesomeIcon className="pointer" icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/zayuhv_/">
            <FontAwesomeIcon className="pointer" icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/ayush-jamdare/">
            <FontAwesomeIcon className="pointer" icon={faLinkedin} />
        </a>
    </div>
  )
}

export default Footer