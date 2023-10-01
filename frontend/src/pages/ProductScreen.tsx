import { useParams, Link } from 'react-router-dom'
import { Col, Row, Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap'
import { Rating } from '../components/Rating'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Products } from '../types'


export const ProductScreen = () => {
    const [product, setProduct] = useState<Products>()

    const { id: productId } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`/api/products/${productId}`)
            setProduct(response.data)
        }

        fetchProducts()
    }, [productId])
    
    return (
        <>
        <Link className='btn btn-secondary my-3' to='/' >
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product?.image} alt={product?.image} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                    <h3>{product?.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        {product && <Rating text={`${product.numReviews}reviews`} value={product.rating} /> }
                    </ListGroupItem>
                    <ListGroupItem>
                        Price: {product?.price }
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>{product?.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>{product && product?.countInStock > 0 ? 'In Stock' : 'Out of stock' }</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block' type='button' disabled={product?.countInStock === 0}>
                                Add to Cart
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

        </>
    )
}
