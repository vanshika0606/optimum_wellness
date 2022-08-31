import React, { useState } from "react";
import "./fat_loss.css";
import fatLoss from "../images/fat-loss.png";
import muscleBuil from "../images/muscle-building.png";
import clinicalCond from "../images/clinical-condition.png";
import postpartum from "../images/postpartum.png";
import sportsNutri from "../images/sports-nutrition.png";

const Fat_loss = () => {
  const [fatbutton, setFatbutton] = useState(1);

  return (
    <div className="fat-section">
      <div className="fat-loss-buttons">
        <ul>
          <li
            onClick={() => {
              setFatbutton(1);
            }}
            className={fatbutton==1?`active-step`:`unactive-step`}
          >
            Fat Loss
          </li>
          <li
            onClick={() => {
              setFatbutton(2);
            }}
            className={fatbutton==2?`active-step`:`unactive-step`}
          >
            Muscle Building
          </li>
          <li
            onClick={() => {
              setFatbutton(3);
            }}
            className={fatbutton==3?`active-step`:`unactive-step`}
          >
            Postpartum
          </li>
          <li
            onClick={() => {
              setFatbutton(4);
            }}
            className={fatbutton==4?`active-step`:`unactive-step`}
          >
            Clinical Condition
          </li>
          <li
            onClick={() => {
              setFatbutton(5);
            }}
            className={fatbutton==5?`active-step`:`unactive-step`}
          >
            Sports Nutrition
          </li>
        </ul>
      </div>

      {fatbutton == 1 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={fatLoss} />

          <p>
            Sustainably achieve and maintain healthy body weight with our weight
            loss program created by expert coaches to develop long-term healthy
            eating habits to improve your lifestyle with our support.
          </p>
        </div>
      )}

      {fatbutton == 2 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={muscleBuil} />

          <p>
            Sustainably achieve and maintain healthy body weight with our weight
            loss program created by expert coaches to develop long-term healthy
            eating habits to improve your lifestyle with our support.
          </p>
        </div>
      )}

      {fatbutton == 3 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={postpartum} />

          <p>
            Sustainably achieve and maintain healthy body weight with our weight
            loss program created by expert coaches to develop long-term healthy
            eating habits to improve your lifestyle with our support.
          </p>
        </div>
      )}

      {fatbutton == 4 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={clinicalCond} />

          <p>
            Sustainably achieve and maintain healthy body weight with our weight
            loss program created by expert coaches to develop long-term healthy
            eating habits to improve your lifestyle with our support.
          </p>
        </div>
      )}

      {fatbutton == 5 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={sportsNutri} />

          <p>
            Sustainably achieve and maintain healthy body weight with our weight
            loss program created by expert coaches to develop long-term healthy
            eating habits to improve your lifestyle with our support.
          </p>
        </div>
      )}
    </div>
  );
};

export default Fat_loss;
