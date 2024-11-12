import { useEffect, useState } from 'react'
import React from 'react'
import {Row, Col} from 'react-bootstrap'
// import product from '../products'
import Product from '../components/ProductComponent'
import axios from 'axios'

export const HomePage = () => {
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    const fetchProducts = async () =>{
      const  {data}  = await axios.get('/api/products')
      setProduct(data);
    }; 
  fetchProducts();
  }
  ,[])

  return (
    <>
        <h1>Latest Product</h1>
        <Row>
            { product.map((product)=> (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}
