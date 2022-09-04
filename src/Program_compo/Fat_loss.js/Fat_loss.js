import React, { useState } from "react";
import "./fat_loss.css";
import fatLoss from "../images/fat-loss.png";
import muscleBuil from "../images/muscle-building.png";
import clinicalCond from "../images/clinical-condition.png";
import postpartum from "../images/postpartum.png";
import sportsNutri from "../images/sports-nutrition.png";
import dedicated from "../images/dedicated_coach.png";
import doctor from "../images/doctor.png";
import community from "../images/online-community.png";
import sustainable from "../images/sustainable_results.png";

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
            className={fatbutton == 1 ? `active-step` : `unactive-step`}
          >
            Fat Loss
          </li>
          <li
            onClick={() => {
              setFatbutton(2);
            }}
            className={fatbutton == 2 ? `active-step` : `unactive-step`}
          >
            Muscle Building
          </li>
          <li
            onClick={() => {
              setFatbutton(3);
            }}
            className={fatbutton == 3 ? `active-step` : `unactive-step`}
          >
            Postpartum
          </li>
          <li
            onClick={() => {
              setFatbutton(4);
            }}
            className={fatbutton == 4 ? `active-step` : `unactive-step`}
          >
            Clinical Condition
          </li>
          <li
            onClick={() => {
              setFatbutton(5);
            }}
            className={fatbutton == 5 ? `active-step` : `unactive-step`}
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
            Suitable for both beginners and Build mass and sculpt your physique
            to the next level with our muscle-building fitness and nutrition
            programme.
          </p>
        </div>
      )}

      {fatbutton == 3 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={postpartum} />

          <p>
            Secure a smooth and healthy journey of nourishment for yourself and
            your baby through all your three trimesters by following our
            clinical nutrition plans.
          </p>
        </div>
      )}

      {fatbutton == 4 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={clinicalCond} />

          <p>
            Combat lifestyle diseases such as PCOS/PCOD, Renal Disorders,
            Thyroid, Hypertension, Diabetes, Gastrointestinal and Geriatric
            disorders with clinical nutrition and fitness plans.
          </p>
        </div>
      )}
      {fatbutton == 5 && (
        <div className="fat-loss-info">
          <img className="fat-loss-img" src={sportsNutri} />

          <p>
            Combat lifestyle diseases such as PCOS/PCOD, Renal Disorders,
            Thyroid, Hypertension, Diabetes, Gastrointestinal and Geriatric
            disorders with clinical nutrition and fitness plans.
          </p>
        </div>
      )}

      <div className="three-methodology under-fat">
        <div>
          <img src={dedicated} />
          <h3>Dedicated Coach</h3>
          <p>
            A health coach shall create a custom plan for you based on their
            expertise and you requirement. They shall be accessible throughout
            your fitness and wellness journey and offer you motivation if you
            ever lose sight of your vision.
          </p>
        </div>
        <div>
          <img src={sustainable} />
          <h3>Sustainable Results</h3>
          <p>
            Our plans shall ensure that you’re empowered with the information
            and know-how to maintain your results even after your programme has
            ended.
          </p>
        </div>
        <div>
          <img src={community} />
          <h3>Online Community</h3>
          <p>
            Be a part of a global community of health-enthusiasts of 20000+
            individuals working towards the shared common goal of building a
            world that’s fitter, healthier and happier!
          </p>
        </div>
        <div>
          <img src={doctor} />
          <h3>Board of Doctors</h3>
          <p>
            Our coaching methodologies and strategies are approved by medical
            health professionals and research scholars who associate with us to
            work on clinical cases such Diabetes, PCOS, Thyroid, Intolerances,
             Gastrointestinal Disorders etc.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Fat_loss;
