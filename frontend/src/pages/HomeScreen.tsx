import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Product } from '../components/Product'
import { Products } from '../types'
import axios from 'axios'

export const HomeScreen = () => {
    const [products, setProducts] = useState<Products[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products')
            setProducts(response.data)
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col
                        key={product._id}
                        sm={12}
                        ms={6}
                        lg={4}
                        xl={3}
                    >
                    <Product
                     id={product._id}
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
