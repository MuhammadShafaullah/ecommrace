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
    axios.get('https://6548a1d6dd8ebcd4ab23491c.mockapi.io/store')
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
       </Routes>

       <ToastContainer />
       <Footer/>
    </div>
  );
}

export default App;
