import React, { useState } from 'react';
import boardGames from "./product-images/board_games.jpeg";
import homePage from "./product-images/home_page.jpeg";
import ethicalDilemas from "./product-images/ethical_dilemas.jpeg";
import cardGames from "./product-images/card_games.jpeg";
import dice from "./product-images/dice.jpg";
import './LandingPage.css';
import { Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Facebook, Instagram } from '@mui/icons-material';
import TikTok from "./../tik-tok.png";
const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { image: boardGames, alt: "Board Games", name: "Crystal White" },
    { image: ethicalDilemas, alt: "Card Games", name: "Midnight Black" },
    { image: cardGames, alt: "Card Games", name: "Sterling Silver" },
    { image: dice, alt: "Board Games", name: "Ocean Blue" },
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 2 >= products.length) ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 2 < 0) ? (products.length - 2) : prevIndex - 2
    );
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="animate-charcter">Rock and a Hard Place</h1>
          <p>Immerse yourself in pure audio with our premium headphones.</p>
          <p>Experience superior sound quality and active noise cancellation for uninterrupted listening.</p>
          <Button variant="contained" color="primary" size="large"
            sx={{ marginTop: '1rem', backgroundColor: '#61dafb', '&:hover': { backgroundColor: '#21a1c4' } }}>
            Explore Now
          </Button>
        </div>
        <div className="hero-image">
          <img src={homePage} alt="Premium Headphones" />
        </div>
      </div>

      <div className="product-gallery">
        <h2 className="gallery-heading">Our Collection</h2>        <div className="gallery-container">
          <IconButton onClick={prevSlide} className="gallery-nav prev">
            <ArrowBackIos />
          </IconButton>
          <div className="gallery-grid">
            {[0, 1].map((offset) => {
              const index = (currentIndex + offset) % products.length;
              const product = products[index];
              return (
                <div key={index} className="gallery-item">
                  <img src={product.image} alt={product.alt} />
                  <div className="gallery-item-content">
                    <h3>{product.name}</h3>
                    <Button variant="outlined" color="primary">View Details</Button>
                  </div>
                </div>
              );
            })}
          </div>
          <IconButton onClick={nextSlide} className="gallery-nav next">
            <ArrowForwardIos />
          </IconButton>
        </div>
      </div>

      <footer className="footer" style={{backgroundColor:"#8087F3"}}>
        <div className="footer-content">
          <div className="footer-section">
            <h2>EthicalDilemas</h2>
            <p>&copy; {new Date().getFullYear()}EthicalDilemas</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61565660862776" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href="https://www.tiktok.com/@ethicaldilemas_cardgame?lang=en" target="_blank" rel="noopener noreferrer">
                <img src={TikTok} alt="TikTok" className="tiktok-icon" />
              </a>
              <a href="https://www.instagram.com/ethical_dilemas/" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;