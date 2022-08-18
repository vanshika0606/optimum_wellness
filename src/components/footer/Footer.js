import React from "react";
import "./footer.css";
import logo from '../images/logo.png'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="box1-box2">
        <div className="box1">
          
        <div className='logo'>
            <img src={logo} />
            
        </div>

          <div id="logos">
            <div>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </div>
            <div>
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="box2">

          <h2>Quick links</h2>
          <div>FAQs</div>
          <div>Returns & Exchanges</div>
          <div>Shipping Policy</div>
          <div>COVID-19 Prevention</div>
          <div>Contact Us</div>
          <div>Press</div>

        </div>
        </div>

        <div className="box3-box4">
        <div className="box3">
          <h2>Shop</h2>
          <div>PUre Yoga Mats</div>
          <div>Yoga Accessories</div>
          <div>Meditation Accessories</div>
          <div>Journey Accessories</div>

        </div>
        <div className="box4">
          <h2> Exclusive Discounts & More!</h2>
          <div>Get 10% off your first purchase!</div>
          <div>Be the first to know about sales, product launches & exclusive offers!</div>
          <div>No spam, ever.</div>
          <input type="text" placeholder="Enter email" className="footer-input"/>
          <br/>
          <button className="footer-button">SIGN UP</button>
        </div>
        </div>
      </div>
    </div>
  );
}
