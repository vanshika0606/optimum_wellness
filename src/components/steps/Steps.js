import React, {useRef, useState} from "react";
import "./steps.css";
import step_1 from "../images/steps_1.png";
import step_2 from "../images/step_2.png";
import step_3 from "../images/step_3.png";
import step_4 from "../images/step_4.png";
import step_5 from "../images/step_5.png";






const Steps = () => {

  const [steps, setSteps] = useState(1);
  


  return (
    <div>
      <div className="rectangle">
       
      <div className="rectangle-for-half-ellipse">
      <div className="half-ellipse-in-rectangle">
      </div>
      </div>
      
      </div>
      
     
      <div className="steps">
        <h3>How It Works</h3>

        <ul className="steps-list">
          <li  onClick={()=>{setSteps(1)}}  className={steps==1?`active-step`:`unactive-step`}>1</li>
          <li onClick={()=>{setSteps(2)}} className={steps==2?`active-step`:`unactive-step`}>2</li>
          <li onClick={()=>{setSteps(3)}}  className={steps==3?`active-step`:`unactive-step`}>3</li>
          <li onClick={()=>{setSteps(4)}} className={steps==4?`active-step`:`unactive-step`}>4</li>
          <li onClick={()=>{setSteps(5)}}  className={steps==5?`active-step`:`unactive-step`}>5</li>
        </ul>
        { (steps==1) && <div  className="step1">
        <h4>Step 1: Select your Programme</h4>

        <img src={step_1} className="step-img" />
        <p>
          Fill up a preliminary assessment form and provide with relevant
          information about your lifestyle that's enable our experts to create
          the right customized programme for your goals.
        </p>
        </div>}

        {(steps==2) && <div className="step2">
        <h4>Step 2: Consult Your Coach</h4>

        <img src={step_2} className="step-img" />
        <p>
        Your designated coach shall have a word with you and discuss your goals in-depth and discuss how our programmes shall help you achieve the same.
        </p>
        </div>}


        { (steps==3) && <div className="step3">
        <h4>Step 3: Get Your Customized Diet And
Exercise Plan</h4>

        <img src={step_3} className="step-img" />
        <p>
        We shall send you your customized nutrition and exercise plan along with recipes and supplementation guidance if required. This plan is subject to further revision.
        </p>
        </div>
}
        { (steps==4) && <div className="step4">
        <h4>Step 4: Receive regular follow ups and
motivation</h4>

        <img src={step_4} className="step-img step-img4" />
        <p>
        Your dedicated coach along with a team of wellness guides shall motivate and follow-up with you on a weekly basis. 
        </p>
        </div>
}
        { (steps==5) && <div className="step5">
        <h4>Step 5: Celebrate your achievements </h4>

        <img src={step_5} className="step-img step-img4" />
        <p>
        Start witnessing results as soon as you start following the plans and rejoice every minor and major milestone you conquer. 
        </p>
        </div>
}
      </div>
    </div>
  );
};

export default Steps;
