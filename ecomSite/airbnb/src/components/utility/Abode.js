import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Abode.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faStar);


class Abode extends Component {
  render() {
    const { abode : {id, images, location, title, price } } = this.props
    return(
        <div className="col s12 waypoint">
            <Link to={`/abode/${id}`}>
                <div className="large-pic">
                    <img 
                      src={`${window.apiHost}${images}`} 
                      alt="Abodes" 
                    />
                </div>
                <div className="info">
                    <div 
                      className="listing-details"
                    >
                      {location}
                    </div>
                    <div 
                      className="title"
                    >
                      {title}
                    </div>
                    <div className="price">${price} per night</div>
                    <div className="reviews">
                        <span 
                          className="stars"><FontAwesomeIcon 
                          icon="star" 
                          size="1x"
                        /></span>
                        <span 
                          className="review-total"
                        >
                          309 · Superhost
                        </span>
                    </div>
                </div>
        
            </Link>
        </div>
      )
  }

}

export default Abode;
