import React, { useState } from 'react';
//  Bootstrap components
import { Col, Form, Container, Row, Button } from 'react-bootstrap';
//  Extras
import logo from '../data/assets/img/logoRojo.svg'
//  Axios -> Promise based HTTP client for the browser and node.js (mi fuente es npm)
import axios from 'axios';
//  md5 -> 
import md5 from 'md5';

const initialForm = {
    user : "",
    pass : ""
}

const LogIn = () => {
    const [form, setForm] = useState(initialForm);

    //  Esto representa el funcionamiento del Servidos, no es definitivo
    const checkUser = async({user,pass}) => {
        let usersUrl = "http://localhost:5000/users";
        await axios.get(usersUrl, {
            params: {
                userName : user,
                password : md5(pass)
            }
        }).then(res => {
            if(res.data.length !== 0)
                alert("El usuario SI está en el sistema")
            else
                alert("No mano, NO estas en el sistema")
            setForm(initialForm)
        }).catch(err => {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.user || !form.pass)
            alert('Datos incompletos, Intenta nuevamente');
        else
            checkUser(form)
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    return(
        <Container Style="padding-top:10%">
            <Row className="text-center">
                <h1>Inicio de Sesión</h1>
            </Row>
            <Row Style="padding-top:10%">
                <Col className="text-center">
                <img src={logo} alt="" Style="height:20rem"/>
                </Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Row xs={1}>
                            <Form.Group as={Col}>
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Usuario" name="user" value={form.user} onChange={handleChange}/>
                            </Form.Group>
                            <Form.Group as={Col}Style="padding-top:2rem">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" name="pass" value={form.pass} onChange={handleChange}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" Style="margin-top:2rem">Registrarse</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LogIn;