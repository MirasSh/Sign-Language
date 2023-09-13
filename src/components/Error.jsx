import React, {useRef, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/animate/animate.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/select2/select2.min.css'
import './style/util.css'
import './style/main.css'
import image from './img/hand2.png'
import Tilt from 'react-parallax-tilt';

const Error = () => {
  return (
    <div className="limiter" >
    <div className="container-login100">
      <div className="wrap-signup100">
        <div className="login100-pic js-tilt" data-tilt>
        <Tilt scale={1.2} perspective={1000}>
        <img src={image} alt="mine" />
        </Tilt>
        </div>

        <div className="login100-form validate-form">          
          <div
            className="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <h2>Аутентификация кезінде қате пайда болды</h2>
            <Link to={'/login'}> <h3>Kiru</h3></Link>
            <Link to={'/signup'}><h3>Tirkelý</h3></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Error