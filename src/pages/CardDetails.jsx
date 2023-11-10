import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


function CardDetails(props) {
  const [product, setProduct] = useState(null);
  const params = useParams()
  console.log(params.id)
  
  useEffect(() => {
    axios.get(`https://6548a1d6dd8ebcd4ab23491c.mockapi.io/store/${params.id}`)
    .then((res)=>{
      if(res.status == 200){
        setProduct(res.data)
      }
        
    })
  })

 
  if (product == null) {
    return (
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }


  return (
    <>

      <div className="container my-5">
        <div className="row">
          <div className="col-sm-6 text-center align-self-center">
            <img src={product.image} alt="" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-sm-5 offset-sm-1">
            <h2>{product.name}</h2>
            <hr />
            <p>
              Product Description: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Facere, at. Dignissimos rerum incidunt temporibus laudantium. Rem,
              eveniet corporis. Itaque delectus quae nesciunt nemo, maiores minus
              deserunt vel. Vero, nulla quisquam!
            </p>{" "}
            <br />
            <h4>
              Rs. {product.price}
              <small className="fw-light text-decoration-line-through">15999</small>
            </h4>{" "}
            <br />
            <button href="" className="btn btn-primary shadow px-5 py-2" onClick={()=>{props.addtocart(product)}}>
              Add to Cart
            </button>
            <a href="" className="btn btn-danger shadow px-5 py-2 ms-4">
              Buy Now
            </a>
            <h5 className="mt-5">Available Offers</h5>
            <ul>
              <li>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit</li>
              <li>Special Price Get extra ₹3000 off (price inclusive of discount)</li>
              <li>No cost EMI ₹1,667/month. Standard EMI also available</li>
              <li>
                Partner Offer ₹2000 Flipkart Gift Card on Every 1000th Transaction
                with a new Visa Debit/Credit Card
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default CardDetails;