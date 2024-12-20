import { useEffect, useState } from 'react'
import React from 'react'
import {Row, Col} from 'react-bootstrap'
// import product from '../products'
import Product from '../components/ProductComponent'
import axios from 'axios'
import { useGetProductsQuery } from '../slices/apiProductsSlice';
import Loader from '../components/Loader'
import Message from '../components/Message'


export const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
    {isLoading? (<Loader/>) : error ? (<Message variant='danger'>{ error?.data?.message || error.error }</Message>): (
      <>
      <h1>Latest Product</h1>
        <Row>
            { products.map((product)=> (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
      </>
    )}
        
    </>
  )
}
