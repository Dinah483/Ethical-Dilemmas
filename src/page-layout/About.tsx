import React, { useEffect } from 'react';
import './About.css';
import boardGames from "./../product/product-images/board_games.jpeg";
import ethicalDilemas from "./../product/product-images/ethical_dilemas.jpeg";
import cardGames from "./../product/product-images/card_games.jpeg";
import dice from "./../product/product-images/dice.jpg";
import Edward from "./../product/authors/EdwardMumbuu.jpeg";
import Matty from "./../product/authors/MattyKaminzi.jpeg";
import { useNavigate } from 'react-router-dom';
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Matty Kaminzi', role: 'Founder & CEO', imageUrl: Matty },
  { name: 'Edward Mumbuu', role: 'Chief Technology Officer', imageUrl: Edward },
];

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
useEffect(() => {
  navigate('/Ethical-Dilemmas/about');
}, [navigate]);
  return (
    <div className="about-us">
      <header className="hero" style={{ backgroundImage: `url(${dice})` }}>
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Leading the way in game innovation to deliver exceptional gaming experiences.</p>
        </div>
      </header>

      <div className="container">
        <section className="section mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
            To provide a fun and engaging way for individuals to learn and understand the principles of ethical journalism in the digital age.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
            To become a leading resource for education and awareness about media ethics in the digital age, empowering individuals to make informed choices and contribute to a more ethical media landscape.
            </p>
          </div>
        </section>

        {/* make two people */}
        <section className="section team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <img src={member.imageUrl} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="footer" style={{backgroundColor:"#8087F3"}}>
        <p>&copy; 2024 EthicalDilemmas. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;