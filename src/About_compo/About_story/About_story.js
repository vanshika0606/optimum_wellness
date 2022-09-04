import React from "react";
import about from "../images/about.PNG";
import "./about_story.css";

const About_story = () => {
  return (
    <div className="about-story">
      <div className="about-img">
        <img src={about} />
        <h1>About Optimum Wellness</h1>
      </div>

      <div className="our-story">
        <h3>Our Story</h3>
        <p>
          Optimum Wellness is the world’s leading and only platform that’s been
          established to provide research-backed diversified solutions to
          holistically elevate an individual’s status of wellness. An
          individual’s wellness is influenced by an increasingly broad scope of
          factors that most lifestyle coaches have an inadequate understanding
          of and as a consequence of which most people find themselves
          struggling to find fulfillment in their life.
          <br/>
          <br/>
           Optimum Wellness provides integrated lifestyle advice considering all influential
          factors of a person’s wellness, such as their intellectual wellness,
          social wellness, financial wellness, dietary wellness, physical
          wellness, emotional(psychological) wellness, occupational wellness,
          environmental wellness, spiritual wellness and sexual wellness.
          <br/>
          <br/>
           We are
          currently majorly prioritizing the physical and dietary aspects of
          wellness and shall soon be rolling out programmes to optimize other
          aspects of wellness. Our mission is to optimize the wellness of the
          entire world at large!
        </p>
      </div>
    </div>
  );
};

export default About_story;
