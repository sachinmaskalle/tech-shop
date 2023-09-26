import { Col, Row } from 'react-bootstrap'
import { Product } from '../components/Product'
import products from '../products'

export const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col
                        key={product.id}
                        sm={12}
                        ms={6}
                        lg={4}
                        xl={3}
                    >
                    <Product
                     id={product.id}
                     name={product.name}
                     image={product.image}
                     price={product.price}
                     rating={product.rating}
                     numReviews={product.numReviews}
                      />
                    </Col>
                ))}
            </Row>
        </>
    )
}
