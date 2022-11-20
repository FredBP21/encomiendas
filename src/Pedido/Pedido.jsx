import { Button, Form, Card} from 'react-bootstrap';
export const Pedido = () => {
    return (
        <div className="container">
            <Card>
                <Card.Header>Solicitud pedido</Card.Header>
                <Card.Body className='text-left'>
                    <Form>
                            <h1>Remitente:</h1>                        
                            <Form.Label>Fecha </Form.Label>
                            <Form.Control type="datetime-local" />
                       
                       
                            <Form.Label>Direccion de recogida</Form.Label>
                            <Form.Control type="direcRecogida" placeholder="direccion de recogida" />
                       

                            
                            <Form.Label>Ciudad de recogida</Form.Label>
                            <Form.Control type="ciudRecogida" placeholder="ciudad de recogida" />

                            <hr />
                            <h1>Destinatario:</h1>
                            <Form.Label>Destinatario</Form.Label>
                            <Form.Control type="nomDestinatario" placeholder="nombre destinatario" />

                            
                            <Form.Label>Direccion de destino</Form.Label>
                            <Form.Control type="direcRecogida" placeholder="direccion de destino" />
                       
                            
                            <Form.Label>Ciudad de destino</Form.Label>
                            <Form.Control type="ciudRecogida" placeholder="ciudad de destino" />
                       
                       
                            <Form.Label>Tel - cel destinatario</Form.Label>
                            <Form.Control type="telDestinatario" placeholder="telDestinatario" />
                       
                        <hr/>
                        <Button variant="primary" type="submit">
                            Crear
                        </Button>
                    </Form>
                    <br/>
                    <br/>
                </Card.Body>
            </Card>
        </div>
    )
}