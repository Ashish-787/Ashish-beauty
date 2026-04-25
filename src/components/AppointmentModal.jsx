import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/collection.css";

const AppointmentModal = ({ show, closeModal }) => {

const [loading,setLoading] = useState(false)

const [form,setForm] = useState({
name:"",
email:"",
phone:"",
service:"",
date:"",
time:"",
message:""
})

// EMAILJS INIT
useEffect(()=>{
emailjs.init("08lffbduJw27F7T4B")
},[])

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault()

setLoading(true)

const templateParams = {
name: form.name,
email: form.email,
phone: form.phone,
service: form.service,
date: form.date,
time: form.time,
message: form.message
}

emailjs.send(
"service_m5eygic",
"template_2hp1wav",
templateParams
)

.then((result)=>{

console.log("SUCCESS:", result)

setLoading(false)

alert("🎉 Appointment Booked Successfully")

// =======================
// WHATSAPP MESSAGE
// =======================

const phoneNumber = "919109010442";

const text = `New Appointment Booking

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Service: ${form.service}
Date: ${form.date}
Time: ${form.time}
Message: ${form.message}
`;

const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

// WhatsApp open
window.location.href = whatsappURL;

// reset form
setForm({
name:"",
email:"",
phone:"",
service:"",
date:"",
time:"",
message:""
})

closeModal()

})

.catch((error)=>{

console.log("ERROR:", error)

setLoading(false)

alert("❌ Failed to send appointment")

})

}

if(!show) return null

return(

<div className="modal-overlay">

<div className="premium-modal">

<h2 className="modal-title">
Book Your Beauty Appointment
</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
required
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
required
/>

<select
name="service"
value={form.service}
onChange={handleChange}
required
>

<option value="">Select Service</option>
<option value="Bridal Makeup">Bridal Makeup</option>
<option value="Party Makeup">Party Makeup</option>
<option value="Hair Styling">Hair Styling</option>
<option value="Facial Treatment">Facial Treatment</option>
<option value="Nail Art">Nail Art</option>

</select>

<div className="row-fields">

<input
type="date"
name="date"
value={form.date}
onChange={handleChange}
required
/>

<select
name="time"
value={form.time}
onChange={handleChange}
required
>

<option value="">Time Slot</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>12:00 PM</option>
<option>2:00 PM</option>
<option>4:00 PM</option>
<option>6:00 PM</option>

</select>

</div>

<textarea
name="message"
placeholder="Additional Message"
value={form.message}
onChange={handleChange}
/>

<button className="premium-btn" disabled={loading}>
{loading ? "Booking..." : "Book Appointment"}
</button>

<button
type="button"
className="cancel-btn"
onClick={closeModal}
>

Cancel

</button>

</form>

</div>

</div>

)

}

export default AppointmentModal