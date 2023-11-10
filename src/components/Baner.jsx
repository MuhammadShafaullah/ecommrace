import React from 'react'
import b1 from "../images/Baner/b1.jpg"
import b2 from "../images/Baner/b2.jpg"
import b3 from "../images/Baner/b3.jpg"
import b4 from "../images/Baner/b4.jpg"

function Baner() {
  return (
    <>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={b1}  className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={b2}  className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={b3}  className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={b4}  className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#"
          role="button"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>
      </div>

    </>


  )
}

export default Baner