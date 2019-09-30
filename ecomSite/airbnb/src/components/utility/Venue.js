import React from 'react'
import BaseCard from './BaseCard';
import { Link } from 'react-router-dom';
import Slick from './Slick';

export default function Venue(props) {
  const baseCards = props.cities.map((city, i) => {
    return (
      <div className="col s3" key={i}>
        <Link to={`/city/${city.cityName}`}>
          <BaseCard city={city} />
        </Link>
      </div>
    )
  })

  return (
    <div>
      <div>
        <Slick elements={baseCards} />  
      </div>
    </div>
  )
}
