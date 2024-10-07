import React from "react";
import './css/boots.css'
const pic = './img/pic.jpg'
const pic1 = './img/pic1.jpg'
const pic2 = './img/pic4.jpg'


const Boots = () => {
  return (
    <>

      <div className="container car-box col-lg-8 col-md-6 col-sm-12 ">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic} className="d-block w-100 image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={pic1} className="d-block w-100 image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={pic2} className="d-block w-100 image" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default Boots;