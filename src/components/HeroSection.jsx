import { Button } from 'antd';
import '../styles/HeroSection.css';
import resumeFile from '../assets/VIPIN RAO (1).pdf';
import FadeInSection from './animations/FadeInSection';

const HeroSection = () => {
  // Smooth scroll to contact
  const handleScrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <FadeInSection direction="down">
        <div className="hero-content">
          <h1>
            Hi, I’m <span className="highlight">Vipin Rao</span>
          </h1>
          <h2>Business Development Manager</h2>
          <p>
            Results-driven sales professional with strong skills in client acquisition,
            account management, and driving business growth.
          </p>
          <div className="hero-buttons">
            <Button type="primary" size="large" onClick={handleScrollToContact}>
              📩 Contact Me
            </Button>
            <Button
              type="default"
              size="large"
              href={resumeFile}
              download="Vipin_Rao_Resume.pdf"
            >
              📄 Download Resume
            </Button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default HeroSection;
