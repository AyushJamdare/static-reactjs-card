import React from 'react'
import pfp from "../images/Esdeath.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Info() {
  return (
    <div>
        <img src={pfp} alt="" />
        <h3 className='name center'>Ayush Jamdare</h3>
        <p className='profession center'>Frontend Developer</p>
        <a href="www.ayushjamdare21@gmail.com">
            <button className='email center'>
                <FontAwesomeIcon className='email-icon' icon={faEnvelope} />
                Email
            </button>
        </a>
    </div>
  )
}

export default Info