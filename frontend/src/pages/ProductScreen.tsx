import { useParams, Link } from 'react-router-dom'
import { Col, Row, Card, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap'
import products from '../products'
import { Rating } from '../components/Rating'


export const ProductScreen = () => {
    const { id: productId } = useParams()
    const product = products.find((product) => product.id === Number(productId))
    
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
