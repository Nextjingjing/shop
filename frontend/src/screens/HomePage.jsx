import React from 'react'
import {Row, Col} from 'react-bootstrap'
import product from '../products'
import Product from '../components/ProductComponent'

export const HomePage = () => {
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
