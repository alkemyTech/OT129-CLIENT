import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'bootstrap';

const HomeSlides = ({data = []}) => {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {data.map((el,index)=>{
                return (
                <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                    <img src={el.image} className="d-block w-100" alt="ong-carousel"/>
                    <div className="carousel-caption d-none d-md-block">
                        <p>{el.description}</p>
                    </div>
                </div>
                )
            })}
            
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    );
};

HomeSlides.propTypes = {
    data:  PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })).isRequired,
  };

export default HomeSlides;
