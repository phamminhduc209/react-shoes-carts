import React from 'react'

import ProductItem from "./ProductItem";
import Typography from "./Typography";

import { dataProducts } from '../mockData';
import { fakeApi } from '../utils/fakeapi';

function Product({ addToCart, carts }) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchProduct() {
      // const response = fetch('xxxxx')
      const response = await fakeApi(dataProducts);
      setProducts(response)
    }
    fetchProduct();
  }, [])

  return (
    <>
      <Typography className="cardTitle" text="Our Products"/>
      <div className="cardBody">
        {products.length === 0 ? (
          <>Loading data ...</>
        ) : (
          <>
            {products.map(product => {
              const isDisabled = carts.some(cart => cart.id === product.id);
              return (
                <ProductItem 
                  key={product.id} 
                  product={product} 
                  addToCart={addToCart} 
                  isDisabled={isDisabled} 
                />
              )
            })}
          </>
        )}
        
      </div>
    </>
  )
}

export default Product