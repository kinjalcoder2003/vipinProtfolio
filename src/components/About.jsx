import '../styles/About.css';
import FadeInSection from './animations/FadeInSection';

const About = () => {
  return (
    <section className="about-section" id="about">
        <FadeInSection direction="left">

      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I’m a dynamic and ambitious Business Development Manager with proven expertise in
          client acquisition, account management, and driving sales growth. I thrive on building
          strong client relationships and leading high-performing teams to exceed targets.
        </p>
        <p>
          With experience across industries like retail, real estate, and consultancy, I bring a
          multi-dimensional perspective to solving business challenges and accelerating revenue.
        </p>
      </div>
      </FadeInSection>
    </section>
  );
};

export default About;
