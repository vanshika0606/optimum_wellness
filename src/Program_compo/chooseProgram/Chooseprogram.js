import React from "react";
import choose from "../images/choose_program.png";
import "./choose_program.css";

const Chooseprogram = () => {
  return (
    <div className="choose-container">
      <img src={choose} className="choose-img" />

      <div className="choose-box">
        <h1 className="choose-your-program">Choose Your Program</h1>
        <p >
          Optimum Wellness shall help decide your health goals and come up with
          an effective strategy to reach them. When you enroll one of our
          programmes, our expert fitness coaches and nutritionists shall mentor
          you throughout your complete transformation journey. Across this
          journey, not only shall you reach your goal, but you'll also learn how
          to maintain your health being making educated decisions regarding food
          and exercise and inculcating sustainably healthy habits.
          <br/>
          <br/>
           Optimum
          Wellness shall help decide your health goals and come up with an
          effective strategy to reach them. When you enroll one of our
          programmes, our expert fitness coaches and nutritionists shall mentor
          you throughout your complete transformation journey. Across this
          journey, not only shall you reach your goal, but you'll also learn how
          to maintain your health being making educated decisions regarding food
          and exercise and inculcating sustainably healthy habits.
        </p>
      </div>
    </div>
  );
};

export default Chooseprogram;
