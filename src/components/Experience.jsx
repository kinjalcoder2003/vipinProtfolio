import { Card, Col, Row } from 'antd';
import '../styles/Experience.css';
import FadeInSection from './animations/FadeInSection';

const experiences = [
  {
    company: 'Shital Signs Pvt. Ltd',
    role: 'Sales Account Executive',
    period: 'March 2025 – Present',
    points: [
      'Drove client acquisition for premium signage and road safety solutions, increasing inquiries by 18%.',
      'Managed key accounts for infrastructure projects, achieving 90% client satisfaction and repeat business.',
      'Developed tailored sales proposals, securing 12+ high-value contracts for signage installations.',
      'Conducted field visits to assess client needs and ensured compliance with safety/design standards.',
      'Utilized CRM tools to streamline lead tracking and boost conversion rates by 12%.',
    ],
  },
  {
    company: 'Freshneer Foods & Services Pvt. Ltd',
    role: 'Business Development Manager',
    period: 'May 2024 – Jan 2025',
    points: [
      'Successfully onboarded and supported 100+ clients.',
      'Drove revenue growth by acquiring new clients.',
      'Provided comprehensive solutions for retail partners.',
      'Boosted brand awareness and built partnerships.',
      'Rapidly promoted for exceeding sales targets.',
    ],
  },
  {
    company: 'Shree Ram Realty',
    role: 'Sales Executive',
    period: 'Jan 2023 – Apr 2024',
    points: [
      'Proactively sourced and qualified potential clients.',
      'Presented compelling sales proposals and conducted property tours.',
      'Maintained excellent customer service and closed high-value deals.',
      'Negotiated effectively to maximize profitability.',
    ],
  },
  {
    company: 'Acorn Universal Consultancy LLP',
    role: 'Pricing Assistant',
    period: 'Aug 2022 – Dec 2022',
    points: [
      'Researched competitive pricing models.',
      'Implemented pricing strategies and made real-time adjustments.',
      'Improved sales and secured priority buys.',
    ],
  },
];


const Experience = () => {
  return (
    <section className="experience-section" id="experience">
            <FadeInSection direction="right">

      <div className="experience-container">
        <h2>Professional Experience</h2>
        <Row gutter={[24, 24]}>
          {experiences.map((exp, index) => (
            <Col xs={24} md={12} style={{ display: 'flex' }} key={index}>
              <Card   style={{ width: '100%' }}
  title={<span style={{ fontWeight: 600 }}>{exp.company}</span>}
  bordered={false}
  hoverable>
                <h3>{exp.role}</h3>
                <p className="period">{exp.period}</p>
                <ul>
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
