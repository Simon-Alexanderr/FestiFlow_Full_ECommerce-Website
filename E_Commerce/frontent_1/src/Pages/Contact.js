import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Assests/styles/Contact.css'

function Contact() {
  return (
    <div>
      <Navbar />
      <div id="contact" className="contact-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>Contact us</h2>
                <p>We're available <span style={{ color: "crimson" }}>24/7</span> to answer all your queries and satisfy your needs</p>
              </div>
            </div>
          </div>
          <div className="row p-3" >
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="contact-block" style={{borderRadius:"20px"}}>
                <form id="contactForm" >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select className="custom-select d-block form-control" id="guest" required data-error="Please select an item in the list.">
                          <option disabled selected>Number Of Guest*</option>
                          <option value="1">10-50</option>
                          <option value="2">50-100</option>
                          <option value="3">100-200</option>
                          <option value="4">250+</option>
                          <option value="5">1000+</option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <select className="custom-select d-block form-control" id="event" required data-error="Please select an item in the list.">
                          <option disabled selected>Occasion*</option>
                          <option value="1">All events</option>
                          <option value="2">Wedding ceremony</option>
                          <option value="3">Reception party</option>
                        </select>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea className="form-control" id="message" placeholder="Your Message" rows="8" data-error="Write your message" required></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                      <div className="submit-button text-center">
                        <button className="btn btn-common my-5" id="submit" type="submit">Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
