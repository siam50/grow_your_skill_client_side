import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    const { image, id, title, description } = course;

    return (
        <div className='my-3 my-lg-5'>
            <Container>
                <Pdf targetRef={ref} filename="Course.pdf">
                    {({ toPdf }) => <button className='bg-danger text-white border-0' onClick={toPdf}>Download Pdf</button>}
                </Pdf>
                <h3>Course Details</h3>
                <div className='d-flex justify-content-center'>
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body ref={ref} className='text-start'>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <Link className='mb-2' to={`/checkout/${id}`}><Button variant="primary">Get premium access</Button></Link>
                    </Card>
                </div>
            </Container>
        </div>
    );
};



export default CourseDetails;