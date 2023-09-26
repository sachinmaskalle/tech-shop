import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Rating } from './Rating'

type ProductProps = {
    id: number
    name: string
    image: string
    price: number
    rating: number
    numReviews: number
    description?: string
    brand?: string
    category?: string
    countInStock?: number
}

export const Product = (props: ProductProps) => {
    const { id, image, name, price, rating, numReviews } = props

    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${id}`}>
                <Card.Img
                    src={image}
                    variant='top'
                />
            </Link>
            <Card.Body>
                <Link to={`/product/${id}`}>
                    <Card.Title as='div'>
                        <strong>{name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating value={rating} text={numReviews} />
                </Card.Text>
                <Card.Text as='h3'>
                    ${price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
