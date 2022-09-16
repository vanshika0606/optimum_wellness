import React from "react";
import "./contact.css";
import img from '../images/contact-image.png'
import wa from '../images/wa-icon.png'
import phone from '../images/phone.png'
import location from '../images/location.png'
import mail from '../images/mail.png'

const Contact = () => {
  return (<>
    <div className="form-img">
      <div className="form">
        <h3>We’d love to hear from you.</h3>
        <form>
        <input type="text" value="Name" name="name" />
        <div className="code-phone">
          <input type="tel" value="" name="code" className="code"/>
          <input type="tel" value="Mobile Number" name="mobileNumber" />
        </div>
        <input type="email" value="Email" name="email" />
        <textarea name="message" rows="4" cols="7" value="Your Message" />
        <input type="submit" value="Send" className="send" />
        </form>
        
      </div>
      <img src={img} />
      
    </div>
    <div className="blue-line">

    </div>
    <div className="ph-lo-ma-wa">
    <div className="ph-lo-ma">
      <div>
        <img src={phone}/>
        <p>+91-9836143134</p>
      </div>
      <div>
        <img src={location}/>
        <p>77/C Dilkhusha Street, Kolkata,
700017, India</p>
      </div>
      <div>
        <img src={mail}/>
        <p>contact@optimumwellness.in</p>
      </div>
      </div>
      <img src={wa} />
    </div>
    </>
  );
};

export default Contact;
