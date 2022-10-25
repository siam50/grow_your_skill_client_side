import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


const CourseDetails = () => {
    const course = useLoaderData();
    const { image, id, title, description } = course;

    return (
        <div className='mt-3 mt-lg-5'>
            <Container>
                <h3>Course Details</h3>
                <div className='d-flex justify-content-center'>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body className='text-start'>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default CourseDetails;