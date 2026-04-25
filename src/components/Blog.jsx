import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Blog = () => {

const blogs = [

{
id:1,
title:"Top Bridal Makeup Trends",
desc:"Discover the latest bridal makeup looks every bride loves.",
image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348",
category:"Makeup"
},

{
id:2,
title:"Hair Care Tips For Healthy Hair",
desc:"Professional tips to keep your hair shiny and strong.",
image:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
category:"Hair"
},

{
id:3,
title:"Best Facials For Glowing Skin",
desc:"Learn which facial treatments work best for radiant skin.",
image:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
category:"Skin Care"
},

{
id:4,
title:"Party Makeup Guide",
desc:"Simple makeup tips to look stunning at every party.",
image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
category:"Makeup"
},

{
id:5,
title:"Nail Art Design Ideas",
desc:"Trendy nail art styles for modern women.",
image:"https://images.unsplash.com/photo-1604654894610-df63bc536371",
category:"Nails"
},

{
id:6,
title:"Hair Spa Benefits",
desc:"Why hair spa treatments are essential for hair health.",
image:"https://images.unsplash.com/photo-1560066984-138dadb4c035",
category:"Hair"
}

];

return (

<div>

<Header/>

{/* HERO */}

<section>

<div id="blogCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

<div className="carousel-inner">

<div className="carousel-item active">

<img
src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
className="d-block w-100 blog-hero-img"
alt=""
/>

<div className="carousel-caption">

<h1>Beauty Tips & Salon Trends</h1>

<p>Discover professional beauty secrets from our experts</p>

</div>

</div>

<div className="carousel-item">

<img
src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e"
className="d-block w-100 blog-hero-img"
alt=""
/>

<div className="carousel-caption">

<h1>Hair & Makeup Guides</h1>

<p>Learn the latest beauty styles and care routines</p>

</div>

</div>

</div>

</div>

</section>


{/* FEATURED BLOG */}

<section className="featured-blog">

<div className="container">

<div className="row align-items-center">

<div className="col-lg-6">

<img
src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
className="featured-img"
alt=""
/>

</div>

<div className="col-lg-6">

<h2>How To Choose Bridal Makeup</h2>

<p>

Choosing the right bridal makeup is essential for your
big day. Our professional artists recommend selecting
styles that match your skin tone and wedding theme.

</p>

<button className="gold-btn mt-3">Read Article</button>

</div>

</div>

</div>

</section>


{/* BLOG GRID */}

<section className="blog-section">

<div className="container">

<h2 className="text-center mb-5">Latest Beauty Articles</h2>

<div className="row g-4">

{blogs.map((blog)=>(
<div className="col-lg-4 col-md-6" key={blog.id}>

<div className="blog-card">

<div className="blog-img">

<img src={blog.image} alt={blog.title}/>

<span className="blog-tag">{blog.category}</span>

</div>

<div className="blog-content">

<h5>{blog.title}</h5>

<p>{blog.desc}</p>

<button className="read-btn">Read More</button>

</div>

</div>

</div>
))}

</div>

</div>

</section>


{/* NEWSLETTER */}

<section className="newsletter">

<div className="container text-center">

<h2>Get Beauty Tips In Your Inbox</h2>

<p>Subscribe for latest beauty tips & salon offers</p>

<div className="newsletter-box">

<input type="email" placeholder="Enter your email"/>

<button className="gold-btn">Subscribe</button>

</div>

</div>

</section>

<Footer/>

</div>

);

};

export default Blog;