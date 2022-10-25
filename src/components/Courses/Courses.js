import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Courses = () => {

    const { user } = useContext(AuthContext);
    const courses = useLoaderData();
    console.log(courses)
    const { id, image, title, description } = courses;

    return (
        <div className='mt-3 mt-lg-5'>
            <Container>
                <Row>
                    <Col lg='9'>
                        <Row>
                            {
                                courses.map(course =>
                                    <Col key={course.id} className='mb-3 d-flex justify-content-center' lg='4'>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={course.image} />
                                            <Card.Body>
                                                <Card.Title>{course.title}</Card.Title>
                                                <Card.Text className='text-start'>
                                                    {course.description.slice(0, 80)}...
                                                </Card.Text>
                                                <Link to={`/courses/${course.id}`}><Button variant="primary">See details</Button></Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>)
                            }
                        </Row>
                    </Col>
                    <Col lg='3'>
                        <h4>Course List</h4>
                        {
                            courses.map(course => <ListGroup className='mb-2' key={course.id}><ListGroup.Item><Link to={`/courses/${course.id}`}>{course.title}</Link></ListGroup.Item></ListGroup>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;