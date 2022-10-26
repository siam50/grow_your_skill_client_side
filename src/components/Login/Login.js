import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [errors, setErrors] = useState('');
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                setErrors('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setErrors(error.message);
            })
    };

    const handleGoogle = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    };

    const handleGithub = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
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
            <Form.Label className='text-danger'>{errors}</Form.Label>
            <div className='my-3'>
                <Button onClick={handleGoogle} className='me-3' variant="outline-dark"><FaGoogle></FaGoogle> Google</Button>
                <Button onClick={handleGithub} variant="outline-dark"><FaGithub></FaGithub> Github</Button>
            </div>
            <Form.Label>If you hav'nt account!<Link to='/register'>Register</Link></Form.Label>
        </Container>
    );
};

export default Login;