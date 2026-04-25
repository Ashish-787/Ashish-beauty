import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Services = () => {
  return (
    <div>

<Header />

{/* HERO */}

<section className="services-hero">

<div id="servicesCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

<div className="carousel-inner">

<div className="carousel-item active">

<img
src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
className="d-block w-100 service-hero-img"
alt=""
/>

<div className="carousel-caption">

<h1>Luxury Beauty Services</h1>

<p>Professional salon treatments for your perfect look</p>

</div>

</div>

<div className="carousel-item">

<img
src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
className="d-block w-100 service-hero-img"
alt=""
/>

<div className="carousel-caption">

<h1>Hair Styling & Makeovers</h1>

<p>Transform your beauty with expert stylists</p>

</div>

</div>

</div>

</div>

</section>


{/* SERVICE 1 */}

<section className="service-detail light">

<div className="container">

<div className="row align-items-center">

<div className="col-lg-6">

<img
src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
className="service-img"
alt=""
/>

</div>

<div className="col-lg-6">

<div className="pricing-card">

<h2>Bridal Makeup</h2>

<p>
Complete bridal makeup service designed to enhance
your natural beauty for your special day.
</p>

<h3 className="price">Starting ₹9,999</h3>

<ul>
<li>HD Bridal Makeup</li>
<li>Hair Styling Included</li>
<li>Long Lasting Products</li>
</ul>

<button className="gold-btn">Book Appointment</button>

</div>

</div>

</div>

</div>

</section>


{/* SERVICE 2 */}

<section className="service-detail dark">

<div className="container">

<div className="row align-items-center">

<div className="col-lg-6">

<div className="pricing-card">

<h2>Hair Styling & Spa</h2>

<p>
Professional haircuts, styling and relaxing hair spa
treatments for smooth shiny hair.
</p>

<h3 className="price">Starting ₹1,999</h3>

<ul>
<li>Hair Cut & Styling</li>
<li>Keratin Treatment</li>
<li>Hair Spa Therapy</li>
</ul>

<button className="gold-btn">Book Appointment</button>

</div>

</div>

<div className="col-lg-6">

<img
src="https://images.unsplash.com/photo-1560066984-138dadb4c035"
className="service-img"
alt=""
/>

</div>

</div>

</div>

</section>


{/* SERVICE 3 */}

<section className="service-detail light">

<div className="container">

<div className="row align-items-center">

<div className="col-lg-6">

<img
src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937"
className="service-img"
alt=""
/>

</div>

<div className="col-lg-6">

<div className="pricing-card">

<h2>Luxury Facial</h2>

<p>
Advanced skincare treatments that hydrate,
rejuvenate and brighten your skin.
</p>

<h3 className="price">Starting ₹2,499</h3>

<ul>
<li>Deep Cleansing Facial</li>
<li>Skin Glow Therapy</li>
<li>Anti Aging Treatment</li>
</ul>

<button className="gold-btn">Book Appointment</button>

</div>

</div>

</div>

</div>

</section>


{/* EXTRA SERVICES */}

<section className="extra-services">

<div className="container">

<h2 className="section-title text-center mb-5">
More Salon Services
</h2>

<div className="row g-4">

<div className="col-md-4">
<div className="service-box">
<h4>💅 Nail Art</h4>
<p>Creative nail designs and manicure treatments.</p>
</div>
</div>

<div className="col-md-4">
<div className="service-box">
<h4>💆 Skin Treatments</h4>
<p>Advanced skin care and facial therapies.</p>
</div>
</div>

<div className="col-md-4">
<div className="service-box">
<h4>💇 Hair Treatments</h4>
<p>Keratin, smoothing and nourishing hair treatments.</p>
</div>
</div>

<div className="col-md-4">
<div className="service-box">
<h4>👰 Party Makeup</h4>
<p>Perfect makeup for parties and special events.</p>
</div>
</div>

<div className="col-md-4">
<div className="service-box">
<h4>✨ Waxing</h4>
<p>Professional waxing and body care services.</p>
</div>
</div>

<div className="col-md-4">
<div className="service-box">
<h4>💖 Spa Therapy</h4>
<p>Relaxing spa services for beauty and wellness.</p>
</div>
</div>

</div>

</div>

</section>

<Footer />

</div>
  );
};

export default Services;