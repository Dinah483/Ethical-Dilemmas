import React from 'react';
import './About.css';
import boardGames from "./../product/product-images/board_games.jpeg";
import ethicalDilemas from "./../product/product-images/ethical_dilemas.jpeg";
import cardGames from "./../product/product-images/card_games.jpeg";
import dice from "./../product/product-images/dice.jpg";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: 'John Doe', role: 'Founder & CEO', imageUrl: boardGames },
  { name: 'Jane Smith', role: 'Chief Technology Officer', imageUrl: ethicalDilemas },
  { name: 'Emily Davis', role: 'Lead Product Designer', imageUrl: cardGames }
];

const AboutPage: React.FC = () => {
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
              At GameMasters, our mission is to create groundbreaking games that bring people together and spark joy. 
              We are dedicated to providing the highest quality gaming experiences, combining innovative mechanics with captivating designs.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To revolutionize how people experience games, whether it's board games, card games, or dice games. We envision a world where everyone can enjoy high-quality gaming without limits,
              powered by our innovations in game design and technology.
            </p>
          </div>
        </section>

        <section className="section values">
          <h2>What We Value</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We are constantly pushing the boundaries of what's possible in game design, ensuring our products lead the way in creativity and fun.
              </p>
            </div>
            <div className="value-item">
              <h3>Player Experience</h3>
              <p>
                Your enjoyment is our priority. From game mechanics to packaging, we aim to provide an exceptional experience.
              </p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>
                We're committed to creating games that last and reduce environmental impact. We incorporate eco-friendly practices in all stages of production.
              </p>
            </div>
          </div>
        </section>

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