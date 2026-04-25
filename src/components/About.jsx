import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">

      <Header />

{/* HERO */}

<section className="about-hero">

<div
id="aboutCarousel"
className="carousel slide carousel-fade"
data-bs-ride="carousel"
data-bs-interval="4000"
>

<div className="carousel-inner">

<div className="carousel-item active">
<img
src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
className="d-block w-100 hero-img"
alt=""
/>

<div className="carousel-caption custom-caption">
<h1>Welcome to BeautyGlow Salon</h1>
<p>Where Beauty Meets Professional Care</p>
</div>

</div>

<div className="carousel-item">

<img
src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
className="d-block w-100 hero-img"
alt=""
/>

<div className="carousel-caption custom-caption">
<h1>Luxury Hair Styling</h1>
<p>Professional haircuts & styling by experts</p>
</div>

</div>

<div className="carousel-item">

<img
src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937"
className="d-block w-100 hero-img"
alt=""
/>

<div className="carousel-caption custom-caption">
<h1>Premium Skin Care</h1>
<p>Advanced facials for glowing skin</p>
</div>

</div>

</div>

</div>

</section>


{/* OUR STORY */}

<section className="about-section">

<div className="container about-container">

<div className="about-image">

<img
src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
alt=""
/>

</div>

<div className="about-content">

<h2>Our Story</h2>

<p>

BeautyGlow Salon was created with a passion to help
people look and feel their best. Our team of professional
beauticians and hairstylists bring creativity, skill,
and personalized care to every client.

</p>

<p>

From bridal makeovers to relaxing skin treatments,
we ensure every visit gives you confidence,
relaxation, and beauty.

</p>

</div>

</div>

</section>



{/* SERVICES GRID */}

<section className="luxury-section">

<div className="container luxury-grid">

<div className="luxury-card">

<img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348" alt="" />

<h3>Bridal Makeup</h3>

<p>Perfect bridal looks crafted by professional makeup artists.</p>

</div>

<div className="luxury-card">

<img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" alt="" />

<h3>Hair Styling</h3>

<p>Modern haircuts and styling designed to suit your personality.</p>

</div>

<div className="luxury-card">

<img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881" alt="" />

<h3>Luxury Facial</h3>

<p>Rejuvenating facials for glowing healthy skin.</p>

</div>

<div className="luxury-card">

<img src="https://images.unsplash.com/photo-1604654894610-df63bc536371" alt="" />

<h3>Nail Art</h3>

<p>Stylish nail art and manicure services.</p>

</div>

<div className="luxury-card">

<img src="https://images.unsplash.com/photo-1560066984-138dadb4c035" alt="" />

<h3>Hair Spa</h3>

<p>Relaxing hair spa treatments for smooth healthy hair.</p>

</div>

<div className="luxury-card">

<img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e" alt="" />

<h3>Party Makeup</h3>

<p>Elegant party makeup for special occasions.</p>

</div>

</div>

</section>



{/* WHY CHOOSE US */}

<section className="why-section">

<div className="container">

<h2 className="section-title">Why Choose Our Salon</h2>

<div className="why-grid">

<div className="why-card">

<div className="why-icon">💄</div>

<h4>Professional Artists</h4>

<p>Certified beauticians with years of salon experience.</p>

</div>

<div className="why-card">

<div className="why-icon">✨</div>

<h4>Premium Products</h4>

<p>We use high-quality beauty and skincare products.</p>

</div>

<div className="why-card">

<div className="why-icon">💖</div>

<h4>Customer Satisfaction</h4>

<p>Your comfort and happiness are always our priority.</p>

</div>

</div>

</div>

</section>



{/* CTA */}

<section className="royal-cta">

<div className="cta-content">

<h2>Book Your Beauty Appointment</h2>

<p>

Experience luxury beauty services and transform your look today.

</p>

<NavLink to="/services" className="gold-btn">

Explore Services

</NavLink>

</div>

</section>

<Footer />

</div>
);
};

export default About;