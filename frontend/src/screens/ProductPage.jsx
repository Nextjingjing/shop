import React from 'react';
import { useParams } from 'react-router-dom';
// import products from '../products';
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import { Rating } from '../components/Rating';
import { useGetProductsDetailsQuery } from '../slices/apiProductsSlice';
import Message from '../components/Message';
import Loader from '../components/Loader.jsx';



const ProductPage = () => {
    const { id: productId } = useParams();
    const { data: product, isLoading, error} = useGetProductsDetailsQuery(productId);
   


  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>

        { isLoading ? (
            <Loader/>
        ) : error ? (
            <Message variant='danger'>{ error?.data?.message || error.error }</Message>
        ): (
            <>
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
        ) }
        
    </>
  )
}

export default ProductPage