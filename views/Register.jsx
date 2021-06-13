import React,{useState} from 'react';
//  Bootstrap Components
import {Container,Row,Form,Col,Button} from 'react-bootstrap';
//  Extras
import logo from '../data/assets/img/logo.svg'

const initialForm = {
    user  : "",
    name  : "",
    email : "",
    pass  : ""
}

const Register = () => {
    const [form, setForm] = useState(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.email || !form.pass || !form.user)
            alert('Datos Incompletos, Intenta nuevamente');
        else{
            console.log(JSON.stringify(form))
            alert("Usuario Registrado con Exito");
            setForm(initialForm);
        }
            
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

        return(
            <>
                <Container Style="padding-top:10%">
                    <Row className="text-center">
                        <h1>Registro de Usuario</h1>
                    </Row>
                    <Row Style="padding-top:10%">
                        <Col clasName="text-center">
                            <img src={logo} alt="" Style="height:20rem"/>
                        </Col>
                        <Col>
                            <Form onSubmit={handleSubmit}>
                            <Row xs={1} md={2}>
                                <Form.Group as={Col}>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu Nombre" name="name" value={form.name} onChange={handleChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu Nombre de Usuario" name="user" value={form.user} onChange={handleChange}/>
                                </Form.Group>
                            </Row>
                            <Row xs={1}>
                                <Form.Group as={Col}Style="padding-top:2rem">
                                    <Form.Label>Correo Electrónico</Form.Label>
                                    <Form.Control type="email" placeholder="Ingresa tu Correo Electrónico" name="email" value={form.email} onChange={handleChange}/>
                                </Form.Group>  
                                <Form.Group as={Col}Style="padding-top:2rem">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingresa una Contraseña" name="pass" value={form.pass} onChange={handleChange}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" Style="margin-top:2rem">Registrarse</Button>
                            </Row>
                            </Form>
                        </Col>    
                    </Row>                    
                </Container>
            </>
        );
}

export default Register;