import React from "react";
import "./footer.css";

import footer_logo from '../images/footer_logo.jpg';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="box1-box2">
        <div className="box1">
          
        <div className='footer-logo'>
            <img src={footer_logo} />
            
        </div>

          <div id="logos">
          <div>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </div>
          <div>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            <div>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            
           
          </div>
        </div>

        <div className="box2">

          <h2>LOCATION</h2>
          <p>86 Road Broknin Street,New York,USA</p>
          <p>needhelp@mail.com</p>
          <p>+91-82402 15482</p>
          

        </div>
        </div>

        <div className="box3-box4">
        <div className="box3">
          <h2>LINKS</h2>
          <p>Programs</p>
          <p>Transformations</p>
          <p>Blogs</p>
          <p>Contact</p>
          <p>About</p>

        </div>
        <div className="box4">
          <h2>KEEP IN TOUCH</h2>
          <p>Sign up now for our mailing list to get all lastest</p>
          <p>news and updates</p>
          <div className="input-button">
          <input type="text" placeholder="Enter email" className="footer-input" value="Enter your email"/>
          
          <button className="footer-button">&#8250;</button>
          </div>
        </div>
        </div>
      <div className="footer-last-line">Optimum Wellness &#169; 2022 All Rights Reserved</div>
      </div>
    </div>
  );
}
