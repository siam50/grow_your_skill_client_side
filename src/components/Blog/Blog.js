import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Container className='mt-3 mt-lg-5 px-lg-5'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>what is cors?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            Firebase help us develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
                            <br />
                            We have so many options for implement authentication.
                            1.Multi-factor authentication.
                            2. Certificate-based authentication.
                            3.Biometric authentication.
                            4.Token-based authentication.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Blog;