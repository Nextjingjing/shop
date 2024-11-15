import React from 'react';
import { useParams } from 'react-router-dom';
// import products from '../products';
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import { Rating } from '../components/Rating';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ProductPage = () => {
    const { id: ProductId } = useParams();
    const [Product, setProduct] = useState([])
    useEffect(()=>{
        const fetchProducts = async () =>{
          const  {data}  = await axios.get(`/api/products/${ProductId}`)
          setProduct(data);
        }; 
      fetchProducts();
      }
      ,[])
   
    const product = Product;

  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>

            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3>{product.price}$</h3>
                    </ListGroup.Item>    
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>{product.price}$</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col><strong>{product.countInStock>0? 'In stock': 'Out of'}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock ===0 }>
                            Add to cart
                        </Button>
                    </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductPage