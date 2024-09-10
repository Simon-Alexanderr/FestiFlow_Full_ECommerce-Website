import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <div id="about" className="about-box">
                <div className="about-a1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-box">
                                    <h2>About <span>Us</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row align-items-center about-main-info">
                                    <div className="col-lg-8 col-md-6 col-sm-12">
                                        <h2> Our <span>Founders</span></h2>
                                        <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="about-img">
                                            <img className="img-fluid rounded" src="images/about-img-01.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center about-main-info">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <div className="about-img">
                                            <img className="img-fluid rounded" src="images/about-img-02.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-6 col-sm-12">
                                        <h2> Our <span>Contributors</span></h2>
                                        <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="story" className="story-box main-timeline-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-box">
                                <h2>Our Story</h2>
                                <p>How <span style={{ color: "dodgerblue", fontStyle: "italic" }}>FestiFlow</span> Was Created </p>
                            </div>
                        </div>
                    </div>
                    <div className="row timeline-element separline">
                        <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                            <div className="time-line-date-content">
                                <p className="mbr-timeline-date mbr-fonts-style display-font">
                                    1 March 2018
                                </p>
                            </div>
                        </div>
                        <span className="iconBackground"></span>
                        <div className="col-xs-12 col-md-6 align-left">
                            <div className="timeline-text-content">
                                <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-font">Where it all began</h4>
                                <p className="mbr-timeline-text mbr-fonts-style display-7">
                                    It all began with a wedding planning, like how some problems begin :D
                                </p>
                                <p>The Time, arrangements, planning various elements for each stage of the wedding was such a hassle.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row timeline-element reverse separline">

                        <div className="row timeline-element reverse separline">
                            <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div className="time-line-date-content">
                                    <p className="mbr-timeline-date mbr-fonts-style display-font">
                                        2 April 2018
                                    </p>
                                </div>
                            </div>
                            <span className="iconBackground"></span>
                            <div className="col-xs-12 col-md-6 align-right">
                                <div className="timeline-text-content">
                                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-font">Another Great event</h4>
                                    <p className="mbr-timeline-text mbr-fonts-style display-7">
                                        Another important gathering that involved not only our whole family but also friends, neighbors and everyone who knew our great grandmother who did so much for us
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row timeline-element separline">
                            <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div className="time-line-date-content">
                                    <p className="mbr-timeline-date mbr-fonts-style display-font">
                                        1 May 2018
                                    </p>
                                </div>
                            </div>
                            <span className="iconBackground"></span>
                            <div className="col-xs-12 col-md-6 align-left">
                                <div className="timeline-text-content">
                                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-font">Proposal</h4>
                                    <p className="mbr-timeline-text mbr-fonts-style display-7">
                                        More events kept coming and we kept going through the same tiring process of planning and sorting everything out, till we thought of a solution that could make everything much easier like it should be
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row timeline-element reverse separline">
                            <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                                <div className="time-line-date-content">
                                    <p className="mbr-timeline-date mbr-fonts-style display-font">
                                        2 June 2018
                                    </p>
                                </div>
                            </div>
                            <span className="iconBackground"></span>
                            <div className="col-xs-12 col-md-6 align-right">
                                <div className="timeline-text-content">
                                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-font">FestiFlow Was born</h4>
                                    <p className="mbr-timeline-text mbr-fonts-style display-7">
                                        A Simple platform that allowed everyone to plan events
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <Footer />
    </div>
  );
}

export default About;
