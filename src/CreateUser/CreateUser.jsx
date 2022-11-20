import { Button, Form, Card} from 'react-bootstrap';
export const CreateUser = () => {
    return (
        <div className="container">
            <Card>
                <Card.Header>Registrese</Card.Header>
                <Card.Body className='text-left'>
                    <Form>
                        
                            <Form.Label>Nombre </Form.Label>
                            <Form.Control type="text" placeholder="Nombre" />
                       

                       
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="usuario" placeholder="Usuario" />
                       

                       
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Correo" />
                       

                       
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                       
                        <hr/>
                        <Button variant="primary" type="submit">
                            Crear
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}