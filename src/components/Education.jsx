import '../styles/Education.css';
import FadeInSection from './animations/FadeInSection';

const Education = () => {
  return (
    <section className="education-section" id="education">
            <FadeInSection direction="right">

      <div className="education-container">
        <h2>Education</h2>
        <div className="education-card">
          <h3>Bachelor of Commerce</h3>
          <p className="institute">Bhikhabhai Jivabhai Vanijya Mahavidyalaya, Anand-Gujarat</p>
          <p className="duration">Jun 2018 – Jul 2021</p>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default Education;
