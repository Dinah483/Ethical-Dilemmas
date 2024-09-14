import './About.css'; 
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  { name: 'John Doe', role: 'Founder & CEO', imageUrl: 'ceo.jpg' },
  { name: 'Jane Smith', role: 'Chief Technology Officer', imageUrl: 'cto.jpg' },
  { name: 'Emily Davis', role: 'Lead Product Designer', imageUrl: 'designer.jpg' }
];

const AboutPage = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <header className="hero">
        <h1>About Us</h1>
        <p>Leading the way in audio innovation and technology to deliver exceptional sound experiences.</p>
      </header>

      <div className="container">
        {/* Mission Section */}
        <section className="section">
          <h2>Our Mission</h2>
          <p>
            At [Your Company Name], our mission is simple: to create groundbreaking audio technology that brings music and sound to life like never before. 
            We are dedicated to providing the highest quality sound experiences, combining cutting-edge technology with sleek, stylish designs.
          </p>
        </section>

        {/* Vision Section */}
        <section className="section">
          <h2>Our Vision</h2>
          <p>
            To revolutionize how people experience sound, whether it’s music, gaming, or calls. We envision a world where everyone can enjoy high-quality audio without limits,
            powered by our innovations in headphones, earphones, and sound technology.
          </p>
        </section>

        {/* Values Section */}
        <section className="section">
          <h2>What We Value</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We are constantly pushing the boundaries of what's possible in audio technology, ensuring our products lead the way in sound quality and features.
              </p>
            </div>
            <div className="value-item">
              <h3>Customer Experience</h3>
              <p>
                Your satisfaction is our priority. From the design of our products to post-purchase support, we aim to provide an exceptional experience.
              </p>
            </div>
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>
                We're committed to creating products that last and reduce environmental impact. We incorporate eco-friendly practices in all stages of production.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <h2>Meet Our Team</h2>
          <div className="team">
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

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 [Your Company Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
export default AboutPage