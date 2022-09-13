import React from "react";
import coach1 from "../../components/images/coach_1.png";
import coach2 from "../../components/images/coach_2.png";
import './about_story.css';


const Two_coaches = () => {
  return (
    <div className="two-coaches-back">
    <div className="two-coaches">
      <div className="coachh1">
        <img src={coach1} />
        <h3>ALAN BAPIST</h3>
        <h5>CEO & FOUNDER</h5>
        <p>
          India’s First Optimum Wellness Coach, Alan Baptist is a young
          entrepreneur with a powerful vision of empowering individuals by
          positively transforming various aspects of their lifestyles ranging
          from optimum physical and dietary wellness to psychological,
          financial, social, spiritual and other critical and popular facets of
          wellness.
          <br />
          <br/>
          Owing to Alan’s wealth of experience owing to his exposure in various
          fields across and the Optimum Wellness brand was founded to offer
          phenomenal fine-tuned counseling with respect to various aspects of an
          individual’s life.
          <br />
          <br/>
          He is a Precision Nutrition certified nutritionist (Canada), and has
          also completed studying MAC-nutrition evidence-based course (UK) and
          the International Sports and Science Association (ISSA) certified
          trainer course, after which he started scientifically educating people
          about fitness and nutrition and has successfully impacted on and
          transformed the lives of over 20000+ people effectively.
          <br />
          <br/>
          He is on a mission to educate as many people as possible with
          evidence-based knowledge in nutrition and fitness sciences. Being a
          sought after authority and educator in the field of nutrition,
          dietetics, fitness, entrepreneurship and psychology, his contributions
          in the field of academics has enabled several freshers to build robust
          stable careers in their respective fields. He is on a mission to
          educate as many people as possible with evidence-based knowledge in as
          many disciplines imaginable!
        </p>
      </div>

      <div className="coachh1">
        <img src={coach2} />

        <h3>VINIT BAPTIST</h3>
        <h5>CEO & FOUNDER</h5>
        <p>
          India’s First MNU Certified (UK) Nutrition Fitness Coach, Vinit
          Baptist is the President and Founder of Optimum Wellness and he is
          well-versed with topics related to fitness and nutrition. He is always
          learning, teaching and coaching people the latest that has been proven
          in the field of fitness and nutrition.
          <br />
          <br/>
          He has educated numerous people about fitness and nutrition and that
          number is growing every day. You’re naturally bound to almost always
          encounter him in an empowering conversation with people about
          exercises, mobility, nutrition, weight training and strength and
          conditioning among other topics.
          <br />
          <br/>
          He has successfully set up six gyms across Kolkata under the brand
          name ZEST FITNESS STUDIO, a brand that’s considered to be the finest
          in the city and plans to expand further globally. He’s officially
          represented and is a spokesperson for various top health companies and
          events and he is rightfully considered to be an authority and icon by
          various fitness and health professionals and he has conducted various
          successful workshops on nutrition, client assessment and exercise
          fundamentals.
          <br />
          <br/>
          He is on a noble quest to educate as many individuals as possible with
          evidence-based knowledge in nutrition, fitness, rehabilitation, pain
          and sports sciences and raise the standard of education and services
          provided in the industry to a significantly higher level.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Two_coaches;
