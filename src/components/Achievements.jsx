import { CheckCircleOutlined } from '@ant-design/icons';
import '../styles/Achievements.css';
import FadeInSection from './animations/FadeInSection';

const achievements = [
  'Winner, Inter-College Basketball Tournament (2018, 2019)',
  'Player, State Federation Basketball Tournament (2019) – Team Anand',
  'Player, Khel Mahakumbh State Tournament (2019) – Team Anand',
  'Player, Gramin Olympic State Tournament (2023) – Team Dungarpur, Rajasthan',
  'Player, Inter-University West Zone Tournament (2019) – Nanded, Maharashtra',
  'Certified: Rajasthan State Certificate in Information Technology'
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
            <FadeInSection direction="left">

      <div className="achievements-container">
        <h2>Achievements & Certifications</h2>
        <ul>
          {achievements.map((item, index) => (
            <li key={index}>
              <CheckCircleOutlined className="icon" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      </FadeInSection>
    </section>
  );
};

export default Achievements;
