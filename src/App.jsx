import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Collections from './components/Collections'
import About from './components/About'
import Contactform from './components/Contactform'
import Blog from './components/Blog'
import Services from './components/Services'
import ProductDetail from './components/ProductDetail'


// import AddUser from './components/AddUser'
// import EditUser from './components/EditUser'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path='/offers' element={<Collections/>} />
         <Route path="/about" element={<About />} />
         <Route path='/contact' element={< Contactform/>} />
          <Route path='/blog' element={< Blog/>} />
          <Route path='/services' element={< Services/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
        {/* <Route path="/add-user" element={ <AddUser />} />
        <Route path="/edit-user/:id" element={ <EditUser />} /> */}






       
     
      
      </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
