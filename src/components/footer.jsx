import react from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import{faFacebook,faTwitter, faYoutube, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>Registerd Office</h6>
                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ff5e14", }} />
                            <p class="text-justify">RDB Boulevard, 8th Floor, Plot K 1,<br></br>Sector 5, Block EP and GP, Kolkata 700091, India.</p>
                            <h6>CONTACT US</h6>
                            <p className='text-justify'>
                                <FontAwesomeIcon icon={faPhone} style={{ color: "#ff5e14", }} />
                                +91-9836913164 (INDIA)
                                <br></br>
                                <br />
                                <FontAwesomeIcon icon={faPhone} style={{ color: "#ff5e14", }} />
                                +1-917-730-4660 (U.S.A)
                            </p>
                            <h6>Email</h6>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ff5e14", }} />
                            <p class='text-justify'>
                                sales@sheeranalyticsandinsights.com
                            </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>HOTLINKS</h6>
                            <ul class="footer-links">
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Cntact Us</a></li>
                                <li><a href="#">Disclimer</a></li>
                                <li><a href="#">Terms of Use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Press Release</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>SUBMIT YOUR QUERY</h6>
                            <div class="footer-form">
                                <input type="text" placeholder='Username' />
                                <input type="email" placeholder='Username@.gmail.com' />
                                <input type="number" placeholder='Your Contact Number' />
                                <input type="text" placeholder='Your Message' />
                                <button type='submit'>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                                <a href="#"> SAI</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                 <li><a class="twitter" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a class="youtube" href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                <li><a class="linkedin" href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer