import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import '../styles/Contact.css';
import FadeInSection from './animations/FadeInSection';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
            <FadeInSection direction="down">

      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>You can reach out to me using the following details:</p>

        <div className="contact-info">
          <div className="info-item">
            <EnvironmentOutlined className="icon" />
            <span>Satellite, Ahmedabad (380015)</span>
          </div>

          <div className="info-item">
            <PhoneOutlined className="icon" />
            <span>+91 99822 38726</span>
          </div>

          <div className="info-item">
            <MailOutlined className="icon" />
            <a
              href="mailto:raovipin2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              raovipin2001@gmail.com
            </a>
          </div>
        </div>
      </div>
      </FadeInSection>
    </section>
  );
};

export default Contact;
