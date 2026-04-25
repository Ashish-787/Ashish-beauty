import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import RateTicker from "./RateTicker";

import "../assets/css/home.css";

const Home = () => {

const products = [
  {
    id: 1,
    name: "Bridal Makeup",
    price: "₹ 9,999",
    img: "/images/beautyHome/homeb1.jpg"
  },
  {
    id: 2,
    name: "Hair Styling",
    price: "₹ 1,999",
    img: "/images/beautyHome/homeb2.jpg"
  },
  {
    id: 3,
    name: "Facial Treatment",
    price: "₹ 2,499",
    img: "/images/beautyHome/homeb3.jpg"
  },
  {
    id: 4,
    name: "Hair Spa / Keratin",
    price: "₹ 5,999",
    img: "/images/beautyHome/homeb4.jpg"
  },
  {
    id: 5,
    name: "Manicure & Pedicure",
    price: "₹ 1,499",
    img: "/images/beautyHome/homeb5.jpg"
  },
  {
    id: 6,
    name: "Party Makeup",
    price: "₹ 3,999",
    img: "/images/beautyHome/homeb6.jpg"
  }
];
  const images = [
    "/images/beautyHome/beauty.jpg",
    "/images/beautyHome/beauty1.jpg",
    "/images/beautyHome/beauty2.jpg",
    "/images/beautyHome/beauty3.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div>

      <Header />
       <RateTicker />

      {/* HERO SLIDER */}

      <section className="hero-slider">

        {images.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="slider-overlay"></div>

        <div className="hero-content">

          <h1>Beauty That Inspires Confidence</h1>

          <p>
            Discover luxury beauty treatments, skincare,
            makeup and hair styling crafted just for you.
          </p>

          <NavLink to="/services" className="gold-btn">
            Explore Services
          </NavLink>

        </div>

      </section>

      {/* COLLECTIONS */}

     <section className="collections-section py-5">

  <div className="container text-center">

    <h2 className="section-title mb-5">Our Beauty Services</h2>

    <div className="row">

      {[
        {
          name: "Bridal Makeup",
          img: "/images/beautyHome/collection1.jpg"
        },
        {
          name: "Hair Styling",
          img: "/images/beautyHome/collection2.jpg"
        },
        {
          name: "Skin Care",
          img: "/images/beautyHome/collection3.jpg"
        },
        {
          name: "Nail Art",
          img: "/images/beautyHome/collection4.jpg"
        }
      ].map((item, i) => (

        <div className="col-lg-3 col-md-6 mb-4" key={i}>

          <div className="collection-card">

            <img src={item.img} alt={item.name} />

            <div className="collection-overlay">
              <h5>{item.name}</h5>
              <button className="gold-btn-sm">Explore</button>
            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


      {/* POPULAR BEAUTY SERVICES */}

<section className="best-sellers py-5">

  <div className="container">

    <h2 className="section-title text-center mb-3">
      Our Popular Beauty Services
    </h2>

    <p className="subtitle text-center mb-5">
      Professional beauty treatments designed to enhance your confidence and style.
    </p>

    <div className="row">

      {products.map((item) => (

        <div className="col-lg-4 col-md-6 col-12 mb-4" key={item.id}>

          <div className="product-card">

            <div className="service-badge">Salon Service</div>

            <img src={item.img} alt={item.name} />

            <div className="product-info text-center">

              <h5>{item.name}</h5>

              <p className="price">{item.price}</p>

              <NavLink
                to={`/service/${item.id}`}
                className="gold-btn w-100 d-block"
              >
                Book Now
              </NavLink>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


{/* WHY CHOOSE US */}

<section className="why-salon py-5">

<div className="container">

<h2 className="section-title text-center mb-5">
Why Choose Our Salon
</h2>

<div className="row">

<div className="col-lg-3 col-md-6 mb-4">

<div className="salon-feature">

<div className="feature-icon">💄</div>

<h5>Professional Makeup</h5>

<p>
Expert makeup artists for bridal, party and
special occasions.
</p>

</div>

</div>

<div className="col-lg-3 col-md-6 mb-4">

<div className="salon-feature">

<div className="feature-icon">💇‍♀️</div>

<h5>Hair Styling</h5>

<p>
Latest haircuts, styling and treatments
by trained professionals.
</p>

</div>

</div>

<div className="col-lg-3 col-md-6 mb-4">

<div className="salon-feature">

<div className="feature-icon">✨</div>

<h5>Skin Care</h5>

<p>
Premium facials and skincare treatments
for glowing skin.
</p>

</div>

</div>

<div className="col-lg-3 col-md-6 mb-4">

<div className="salon-feature">

<div className="feature-icon">💅</div>

<h5>Nail Art</h5>

<p>
Stylish nail art and manicure services
for a perfect look.
</p>

</div>

</div>

</div>

</div>

</section>

{/* TESTIMONIALS */}

<section className="testimonials py-5">

<div className="container">

<h2 className="section-title text-center mb-5">
What Our Clients Say
</h2>

<div className="row">

<div className="col-lg-4 col-md-6 mb-4">

<div className="testimonial-card">

<img
src="/images/beautyHome/testimonial.jpg"
alt=""
/>

<p>
Amazing salon service! The bridal makeup was
absolutely perfect and lasted the entire day.
</p>

<h6>Priya Sharma</h6>

<span>Bridal Client</span>

</div>

</div>

<div className="col-lg-4 col-md-6 mb-4">

<div className="testimonial-card">

<img
src="/images/beautyHome/testimonial2.jpg"
alt=""
/>

<p>
The hair styling and facial were fantastic.
Very professional staff and clean salon.
</p>

<h6>Neha Verma</h6>

<span>Regular Customer</span>

</div>

</div>

<div className="col-lg-4 col-md-6 mb-4">

<div className="testimonial-card">

<img
src="https://randomuser.me/api/portraits/women/68.jpg"
alt=""
/>

<p>
Best beauty parlour experience. Loved the nail art
and skincare treatment.
</p>

<h6>Anjali Gupta</h6>

<span>Salon Client</span>

</div>

</div>

</div>

</div>

</section>

{/* BEFORE AFTER SECTION */}

<section className="transformation py-5">

<div className="container">

<h2 className="section-title text-center mb-5">
Beauty Transformations
</h2>

<div className="row">

<div className="col-lg-6 mb-4">

<div className="transform-card">

<img
src="/images/beautyHome/before.jpg"
alt=""
/>

<div className="transform-overlay">
<h4>Bridal Makeup Transformation</h4>
<p>See the magical makeover by our expert artists.</p>
</div>

</div>

</div>

<div className="col-lg-6 mb-4">

<div className="transform-card">

<img
src="https://images.unsplash.com/photo-1562322140-8baeececf3df"
alt=""
/>

<div className="transform-overlay">
<h4>Hair Styling Transformation</h4>
<p>Luxury hair styling and treatment results.</p>
</div>

</div>

</div>

</div>

</div>

</section>
{/* BEAUTY GALLERY */}
{/* BEAUTY GALLERY */}

<section className="beauty-gallery py-5">

<div className="container">

<h2 className="section-title text-center mb-3">
Our Beauty Gallery
</h2>

<p className="text-center gallery-sub mb-5">
Explore our latest salon work, bridal makeovers and beauty treatments.
</p>

<div className="row">

{[
{
img:"/images/beautyHome/gallery1.jpg",
title:"Professional Makeup"
},
{
img:"/images/beautyHome/gallery2.jpg",
title:"Indian Bridal Makeup"
},
{
img:"/images/beautyHome/gallery3.jpg",
title:"Bridal Hair Styling"
},
{
img:"/images/beautyHome/gallery4.jpg",
title:"Luxury Facial"
},
{
img:"/images/beautyHome/gallery5.jpg",
title:"Party Makeup"
},
{
img:"/images/beautyHome/gallery6.jpg",
title:"Designer Nail Art"
},
{
img:"/images/beautyHome/gallery7.jpg",
title:"Hair Spa"
}
].map((item,i)=>(

<div className="col-lg-4 col-md-6 mb-4" key={i}>

<div className="gallery-card">

<img
src={item.img}
alt={item.title}
loading="lazy"
/>

<div className="gallery-overlay">

<h5>{item.title}</h5>

</div>

</div>

</div>

))}

</div>

</div>

</section>
      <Footer />

    </div>
  );
};

export default Home;