import React from 'react';
import './aboutus.css'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const AboutUs = () => {
    return (
        <div className="about-container">
            <Navbar />
            
            <section className="about-intro">
                <h2>About Us</h2>
                <hr/>
                <p className="intro-text">
                    Welcome to Sharp Threads — Where Fashion Meets Quality!
                </p>
                <p className="about-description">
                    At Sharp Threads, we believe that fashion is more than just clothing; it's a statement of style, confidence, and individuality. We are an online fashion destination dedicated to bringing you the latest trends, high-quality fabrics, and a seamless shopping experience right at your fingertips.
                </p>
            </section>

            
            <section className="about-mission">
                <div className="mission-text">
                    <h3>The Mission</h3>
                    <p className="mission-statement">
                        At the heart of everything, we set out to offer the best quality.
                    </p>
                </div>
                <div className="mission-details">
                    <p>
                        Our mission is simple: to provide affordable, stylish, and sustainable clothing that empowers everyone to express themselves with confidence. Whether you're looking for casual wear, office attire, or something for a special occasion, Sharp Threads offers a wide range of clothing options that cater to all styles and preferences.
                    </p>
                </div>
            </section>

            
            <section className="about-journey">
                <h2>How It Started</h2>
                <hr/>
                <div className="journey-content">
                    <div className="journey-text">
                        <h3>Our Journey</h3>
                        <hr class="left-aligned-line" />
                        <p>
                            Sharp Threads began as a collaboration between a group of close friends, all with a shared love for fashion and a desire to make stylish clothing accessible to everyone. With backgrounds in fashion, design, and business, we decided to combine our strengths and create a brand that would not only offer trendy clothing but also focus on quality, affordability, and sustainability.
                        </p>
                    </div>
                    <div className="journey-image">
                         <img src= "/images/journey.jpg" alt="Journey" /> 
                     </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutUs;