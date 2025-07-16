import '../styles/Footer.css';
import FadeInSection from './animations/FadeInSection';

const Footer = () => {
  return (
    <footer className="footer-section">
            <FadeInSection direction="up">

      <div className="footer-content">
        <p>© {new Date().getFullYear()} Vipin Rao. All rights reserved.</p>
        <p>
          Built with ❤️ using React.js & Ant Design
        </p>
      </div>
      </FadeInSection>
    </footer>
  );
};

export default Footer;


