import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom";

export const Item = ( {id,producto} ) => {

    return (
        <Card className="text-center mx-auto" style={{ width: '16rem' }}>
            <Card.Img variant="top" src={producto.img} width= "200px" />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                    {producto.desc}
                </Card.Text>
                <Card.Text>
                    Precio: ${producto.precio}
                </Card.Text>
                <Link to={`/detail/${producto.id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
        </Card>
    )
}