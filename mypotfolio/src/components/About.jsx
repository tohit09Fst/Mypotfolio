import React from 'react';
import '../portfolio.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const About = () => {
  const skills = [
    'Java', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'SQL',
    'React.js', 'Node.js', 'Express.js', 'GraphQL', 'Bootstrap', 'CSS3', 'Tailwind CSS',
    'MongoDB', 'MySQL', 'PostgreSQL'
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: '7877815027' },
    { icon: <FaEnvelope />, text: 'tohit0333@gmail.com' },
    { icon: <FaGithub />, text: 'github.com/tohit-khan' },
    { icon: <FaLinkedin />, text: 'linkedin.com/in/tohit-khan' },
  ];

  return (
    <section className="portfolio-about-section" id="about">
      <img
        src="https://avatars.githubusercontent.com/u/104371183?v=4"
        alt="Tohit Khan Avatar"
        className="portfolio-avatar"
      />
      <div className="portfolio-name">Tohit Khan</div>
      <div className="portfolio-title">Frontend Development Intern</div>
      <div className="portfolio-intro">
        Based in Babra, Pali, Rajasthan, I am a BTech student specializing in CSE(AI/ML) at Polaris School of Technology.<br/>
        I am passionate about creating intuitive and efficient web applications using modern technologies.
      </div>
      <div className="portfolio-socials">
        <a
          href="tel:7877815027"
          className="portfolio-social-link"
          title="Call"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhone />
        </a>
        <a
          href="mailto:tohit0333@gmail.com"
          className="portfolio-social-link"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/tohit-khan"
          className="portfolio-social-link"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/tohit-khan"
          className="portfolio-social-link"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="portfolio-skills-cloud">
        {skills.map((skill, i) => (
          <span className="portfolio-skill" key={i}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default About;