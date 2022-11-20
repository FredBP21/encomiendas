import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const Home = () => {
    return (
        <Container className="container-fluid">
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Soluciones</Card.Title>
                        <Card.Text>
                            <u>
                                <li>Digitales</li>
                                <li>Soluciones de transporte y entrega</li>
                                <li>Soluciones de logitica</li>
                                <li>Soluciones para eCommerce</li>
                                <li>Soluciones para empresas</li>
                            </u>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Transporte, entrega y logística física o digital para ti o tu empresa a tiempo.</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Mundo de Soluciones
                            ¡Lo tenemos todo!</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Medio de envio</Card.Title>
                        <Card.Text>
                            <u>
                                <li>Terrestre</li>
                                <li>Acuatico</li>
                                <li>Aereo</li>
                            </u>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}

