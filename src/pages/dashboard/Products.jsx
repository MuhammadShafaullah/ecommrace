import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";




function Products() {
  const [products, setProducts] = useState([])
  const [loder, setLoder] = useState(false)
  const navigator = useNavigate();


  const items = (() => {
    axios.get('https://65489546dd8ebcd4ab232d5f.mockapi.io/products')
      .then((response) => {
        
        setProducts(response.data)
        setLoder(false)
      })
  })


  useEffect(() => {
    items()
  }, [])

  const del_notfy = () => {
    toast.success('Removed', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  const removeItem = (id) => {
    axios.delete(`https://65489546dd8ebcd4ab232d5f.mockapi.io/products/${id}`)
    .then((res) => {
      console.log(res.status)
      del_notfy();
      items()
      setLoder(true)
    })
   
    
    

  };




  return (
    <>
      <table className="table table-hover" >
        <tbody>

          <tr >
            <th >#</th>
            <th >Name</th>
            <th >Price</th>
            <th >Image</th>
            <th >Action</th>
          </tr>

          {loder == true ? (
            
              <div className="cn text-center asd mt-5">
                <div class="spinner-border text-danger spncen" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              </div> 
            
              
            ) : (          
              products.map((element, index) => {
                return(
  
                  <tr key={index}>
                  <th> {element.id}</th>
                  <td>{element.name}</td>
                  <td>{element.price}</td>
                  <td><img src={element.image} alt="" className="rounded-circle" width='40px' height="40px" /></td>
                  <td className='d-flex justify-content-around'>
                    <button className="btn btn-danger" onClick={() => { removeItem(element.id) }}>Delete</button>
                    
                    <NavLink className="nav-link" to={`product/edit/${element.id}`}>
                    <button className="btn btn-warning" >Edit</button>
                    </NavLink>

                    <button className="btn btn-primary">View</button>
  
                  </td>
                </tr>
                )    
              })
            )}





        </tbody>
      </table >
    </>
  )

}

export default Products;
