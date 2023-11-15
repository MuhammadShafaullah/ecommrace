import React from 'react'
import { Link } from "react-router-dom";
import Baner from '../components/Baner';



function Home(props) {

  return (
    <>
      <Baner />

      <div className="container">

        <div className='row'>
        {props.products.length == 0 ? (
              <div className="cn text-center mt-5">
                <div class="spinner-border text-danger spncen" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              </div> 
            ) : null}
          {
            props.products.map((element, index) => {
              return (
                <div className="col-md-3 mb-3 mt-3" key={element.id}>
                  <div className="card">
                    <img src={element.image} className="card-img-top" alt="..." />

                    <div className="card-body">
                      <Link to={`/details/${element.id}`}>
                        <h5 className="card-title">{element.name}</h5>
                      </Link>

                      <h6>Price: {element.price}</h6>
                      <h6>Category: {element.category}</h6>

                      <button onClick={()=>{props.addtocart(element)}} className="btn btn-primary">
                        Add To Cart </button>

                    </div>
                  </div>
                </div>
              )

            })

          }
        </div>
      </div>


    </>

  )
}

export default Home;