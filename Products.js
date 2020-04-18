import React, { useEffect, useState} from 'react';

function Products(props) {

  // const [products, setProducts] = useState([])
  // const fetchProducts = () => {
  //   products = props.productList.map(product => <li>{product.name}</li>)
  // }

  // useEffect(fetchProducts, []);

  return (
    
    <ul>
      {props.state.productList.map(product => <li>{product.name}</li>)}
    </ul>
  );
}

export default Products;