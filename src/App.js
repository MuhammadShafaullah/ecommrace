import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navebar from './components/Navebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CardDetails from './pages/CardDetails';
import Carts from './pages/Carts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

// dashboard
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/dashboard/Create";
import Edit from "./pages/dashboard/Edit";
import Products from "./pages/dashboard/Products";




function App() {
 const del_notfy= ()=>{ toast.success('Removed', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })};
    const add_notfy= ()=>{ toast.success('Added', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })};  

  const [products, setProducts]=useState([])
  const [cart, setCart] = useState([])

  const addtocart =((element)=>{
    const tempAr =[...cart,  element];
    setCart(tempAr)
    add_notfy();
 

  })

  const removeItem = (index) => {
    const tempAr = [...cart];
    tempAr.splice(index, 1);
    setCart(tempAr);
    del_notfy();
   
  };

  const items=(()=>{
    axios.get('https://65489546dd8ebcd4ab232d5f.mockapi.io/products')
    .then((response) =>{
      console.log(response);
       setProducts(response.data)})
  })
  useEffect(()=>{
    items()
  },[])

  
  return (
    <div className="App">
       <Navebar cartlen={cart.length}/>
       
     

       <Routes>
        <Route path='/' element={<Home products={products} addtocart={addtocart}/>}/>
        <Route path='/details/:id' element={<CardDetails  addtocart={addtocart}/>} />
        <Route path='/cart' element={<Carts cart={cart} removeItem={removeItem}/>} />
        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Products />} />
          <Route path="product/create" element={<Create />} />
          <Route path="product/edit/:id" element={<Edit />} />
        </Route>
       
       </Routes>

       <ToastContainer />
       <Footer/>
    </div>
  );
}

export default App;
