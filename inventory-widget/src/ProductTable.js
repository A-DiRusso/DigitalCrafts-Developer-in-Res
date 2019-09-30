import React from 'react';
import productData from './data';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

export default function ProductTable(props) {

  let tempProducts = {};
  productData.data.forEach((product, i) => {
    // run some quick code to see if this is a new catagory
    if(tempProducts[product.category] === undefined){
      tempProducts[product.category] = [];
    }
    tempProducts[product.category].push(product);

    // return (
    //   <ProductRow key={i} product={product} />
    // )
  });

  let rows = [];
  // we need two loops outside loop loops through cats
  // ie sporting goods and electronics
  //it will run as many times as there are cats
  for(let key in tempProducts){
    rows.push(<ProductCategoryRow key={key} header={key} />) // push the ProductCategoryRow onto rows
    // Map through all the items of this type
    //ie sportinggoods 
    tempProducts[key].forEach((product, i) => {
      rows.push(<ProductRow key={key + i} product={product} />) //push this element on the rows
    })
  }

  

  console.log(props.search);
  return (
    <div className="product-table">
      <table className="table table-stripe">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* All Products Go Here */}
          {rows}
        </tbody>
      </table>
    </div>
  )
}

