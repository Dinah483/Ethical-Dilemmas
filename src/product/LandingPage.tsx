import heroProduct from "./product-images/headphones.png"; // Tell webpack this JS file uses this image
import productBlue from "./product-images/productBlue.png";
import productBlack from "./product-images/productBlack.png";
import productSilver from "./product-images/productSilver.png";
import productWhite from "./product-images/productWhite.png";

import './LandingPage.css';
import { Button } from "@mui/material";


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* hero section */}
      <div className="hero-section">
        <div className="image-div">
          <img className="product-image" src={heroProduct} alt="Headphones" />
        </div>
        <div className="product-description">
          <h1 className="animate-charcter">Sound Elevated</h1>
          <p>
            Immerse yourself in pure audio.
          </p>
          <p>
            Superior sound quality with active noise cancellation for uninterrupted listening.
          </p>
          <p>
            Order now and experience the difference.
          </p>
          <Button variant="contained"
            sx={{ backgroundColor: '#007bff', '&:hover': { backgroundColor: '#0056b3' } }}>
            Order Now !
          </Button>
        </div>
      </div>
      {/* body */}
      <div className="product-body">
        <div className="image-container">
          <img className="product-image" src={productWhite} alt="Headphones" />
          <p>Bass Boost</p>
        </div>
        <div className="image-container">
          <img className="product-image" src={productBlack} alt="Headphones" />
          <p>Noise Canceling</p>
        </div>
      </div>
      <div className="product-body">
        <div className="image-container">
          <img className="product-image"  src={productSilver} alt="Headphones" />
          <p>FM Radio</p>
        </div>
        <div className="image-container">
          <img className="product-image" src={productBlue} alt="Headphones" />
          <p>Bluetooth</p>
        </div>
      </div>
      {/*Footer*/}
      <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>Company Name</h2>
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
        <div className="footer-middle">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/path/to/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default LandingPage