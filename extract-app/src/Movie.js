import React from 'react';
import allTheData from './data';


const dataDiv = allTheData.map((data, i) => {
  return (
    <div key={i}>
        <h2>
          {data.commentHeading}
        </h2>
        <img 
          text={data.text} 
          src={data.author.avatarUrl} 
          alt="avatar" 
        />
        <h1>
          {data.author.name}
        </h1>
        <hr />          
    </div>
  )
})

export default function Movie() {
  return (
    <div>
      {dataDiv}
    </div>
  )
}
