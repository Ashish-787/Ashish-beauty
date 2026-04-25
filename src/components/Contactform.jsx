import React, { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contactform = () => {

const [formData,setFormData]=useState({
name:"",
email:"",
phone:"",
message:""
});

const formRef = useRef(null);

// input change
const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value});
};

// form submit
const handleSubmit=(e)=>{
e.preventDefault();

alert("Message Sent Successfully ✨");

setFormData({
name:"",
email:"",
phone:"",
message:""
});
};

// scroll to form
const scrollToForm = ()=>{
formRef.current.scrollIntoView({behavior:"smooth"});
};

return(

<div>

<Header/>

{/* HERO */}

<section className="contact-hero">

<div className="contact-overlay"></div>

<div className="hero-content">

<h1>Contact Our Beauty Salon</h1>

<p>We would love to hear from you</p>

</div>

</section>


{/* CONTACT AREA */}

<section className="contact-area" ref={formRef}>

<div className="container">

<div className="row">

{/* FORM */}

<div className="col-lg-7">

<div className="contact-glass-card">

<h2>Send Us A Message</h2>

<form onSubmit={handleSubmit}>

<div className="row">

<div className="col-md-6">

<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
required
/>

</div>

<div className="col-md-6">

<input
type="email"
name="email"
placeholder="Your Email"
value={formData.email}
onChange={handleChange}
required
/>

</div>

</div>

<input
type="tel"
name="phone"
placeholder="Phone Number"
value={formData.phone}
onChange={handleChange}
required
/>

<textarea
name="message"
rows="5"
placeholder="Your Message"
value={formData.message}
onChange={handleChange}
required
></textarea>

<button className="contact-btn">
Send Message
</button>

</form>

</div>

</div>


{/* INFO */}

<div className="col-lg-5">

<div className="contact-info-box">

<div className="info-card">

<h4>📍 Salon Location</h4>

<p>MG Road, Indore, Madhya Pradesh</p>

</div>

<div className="info-card">

<h4>📞 Phone</h4>

<p>+91 9109010442</p>

</div>

<div className="info-card">

<h4>✉ Email</h4>

<p>beautysalon@email.com</p>

</div>

<div className="info-card">

<h4>⏰ Opening Hours</h4>

<p>Mon - Sun : 10AM - 8PM</p>

</div>

</div>

</div>

</div>

</div>

</section>


{/* MAP */}

<section className="contact-map">

<iframe
src="https://www.google.com/maps?q=Indore&output=embed"
width="100%"
height="400"
style={{border:0}}
loading="lazy"
></iframe>

</section>


{/* CTA */}

<section className="contact-cta">

<div className="container text-center">

<h2>Ready For Your Transformation?</h2>

<p>Book your salon appointment today</p>

<button
className="contact-btn"
onClick={scrollToForm}
>
Contact Us
</button>

</div>

</section>

<Footer/>

</div>

)

}

export default Contactform