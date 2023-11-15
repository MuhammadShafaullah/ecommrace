import React from 'react'
import payment from "../images/payment.png"

function Carts(props) {
  let total = 0;
  const shiping= 70;
  let ship=''



  return (
    <>
      <div className="container my-5">
        <div className='row'>
          <h1 className="text-center mb-5">Shopping Cart</h1>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <h3>Cart</h3>
                <div className="row">


                  {props.cart.map((element, index) => {
                    {
                      total += +element.price;
                      ship=total+shiping
                    }
                    return (
                      <>
                      
                      <div className="col-sm-3 text-center align-self-center">
                        <img
                          src={element.image}
                          className="img-fluid img-thumbnail shadow-sm"
                          alt="..."
                          style={{ width: "150px", height:"150px" }}
                          />
                      </div>

                      <div className="col-sm-9">
                      <h5>{element.name}</h5>
                  <p className="mb-2 text-muted small">
                    Description: Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Rerum quas, nihil vel velit sed, quos
                    consequatur maiores odio libero eius est in mollitia quo
                    minus dolorum culpa consectetur, ipsam unde!
                  </p>
                  <div className="my-3">
                    <label htmlFor="quantity">Quantity:</label>
                    <a className="minus-cart btn">
                      <i className="fas fa-minus-square fa-lg" />
                    </a>
                    <span id="quantity">3</span>
                    <a className="plus-cart btn">
                      <i className="fas fa-plus-square fa-lg" />
                    </a>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button onClick={() => {
                        props.removeItem(index);
                      }} className="btn btn-sm btn-secondary mr-3">
                      Remove item
                    </button>
                    <p className="mb-0">
                      <span>
                        <strong>Rs.{element.price}</strong>
                      </span>
                    </p>
                  </div>
                      </div>

                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h3>The Total Amount of</h3>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Amount<span>{total}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping<span>Rs. 70.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total</strong> <small>(including VAT)</small>
                    </div>
                    <span>
                      <strong>{ship}</strong>
                    </span>
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="" className="btn btn-primary">
                    Place Order
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <h5 className="mb-4">We accept</h5>
                <img src={payment} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Carts;