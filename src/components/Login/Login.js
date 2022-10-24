import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle, IconName } from "react-icons/fa";

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <Container className='w-50 mx-auto text-start mt-5'>
            <Form onSubmit={handleSubmit}>
                <h3 className='text-info'>Login Here</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='my-3'>
                <Button className='me-3' variant="outline-dark"><FaGoogle></FaGoogle> Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Github</Button>
            </div>
            <Form.Label>If you hav'nt account!<Link to='/register'>Register</Link></Form.Label>
        </Container>
    );
};

export default Login;