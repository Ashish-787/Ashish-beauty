import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppointmentModal from "./AppointmentModal";
import "../assets/css/collection.css";

const services = [
{
id:1,
name:"Bridal Makeup",
price:"₹9,999",
category:"Makeup",
desc:"HD bridal makeup with premium cosmetics",
image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348"
},
{
id:2,
name:"Luxury Facial",
price:"₹2,499",
category:"Skin Care",
desc:"Deep skin treatment for glowing skin",
image:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937"
},
{
id:3,
name:"Hair Spa",
price:"₹1,999",
category:"Hair",
desc:"Relaxing hair spa for smooth hair",
image:"https://images.unsplash.com/photo-1560066984-138dadb4c035"
},
{
id:4,
name:"Nail Art",
price:"₹999",
category:"Nails",
desc:"Designer nail art styles",
image:"https://images.unsplash.com/photo-1604654894610-df63bc536371"
},
{
id:5,
name:"Party Makeup",
price:"₹3,999",
category:"Makeup",
desc:"Elegant party look",
image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
},
{
id:6,
name:"Keratin Treatment",
price:"₹4,999",
category:"Hair",
desc:"Smooth and shiny hair treatment",
image:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f"
}
];

const Collections = () => {

const [showModal,setShowModal]=useState(false)
const [filter,setFilter]=useState("All")

const filtered =
filter==="All"
?services
:services.filter(s=>s.category===filter)

return(

<div>

<Header/>

{/* HERO */}

<section className="collection-hero">

<div className="hero-overlay"></div>

<div className="hero-content">

<h1>Luxury Salon Services</h1>

<p>Bridal Makeup • Hair Styling • Skin Care</p>

<button
className="gold-btn"
onClick={()=>setShowModal(true)}
>
Book Appointment
</button>

</div>

</section>


{/* FILTER */}

<section className="container py-5">

<h2 className="collection-title text-center">
Our Salon Services
</h2>

<div className="text-center mb-4">

{["All","Makeup","Hair","Skin Care","Nails"].map(cat=>(

<button
key={cat}
className={`filter-btn ${filter===cat?"active":""}`}
onClick={()=>setFilter(cat)}
>
{cat}
</button>

))}

</div>


{/* SERVICE CARDS */}

<div className="row">

{filtered.map(item=>(

<div className="col-lg-4 col-md-6 mb-4" key={item.id}>

<div className="collection-card">

<img src={item.image} alt={item.name}/>

<div className="card-content">

<h5>{item.name}</h5>

<p className="desc">{item.desc}</p>

<p className="price">{item.price}</p>

<button
className="gold-btn w-100"
onClick={()=>setShowModal(true)}
>
Book Now
</button>

</div>

</div>

</div>

))}

</div>

</section>


{/* CTA */}

<section className="booking-cta">

<div className="container text-center">

<h2>Ready for Your Beauty Transformation?</h2>

<button
className="gold-btn"
onClick={()=>setShowModal(true)}
>
Book Appointment
</button>

</div>

</section>


{/* APPOINTMENT MODAL */}

<AppointmentModal
show={showModal}
closeModal={()=>setShowModal(false)}
/>

<Footer/>

</div>

)

}

export default Collections