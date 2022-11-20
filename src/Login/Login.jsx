import { Button, Form, Card} from 'react-bootstrap';
export const Login = () => {
    return (
        <div className="container">
            <Card>
                <Card.Header>Login</Card.Header>
                <Card.Body className='text-left'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <p><a href='/crearUsu'>Registrese</a></p>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}