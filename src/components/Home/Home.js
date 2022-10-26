import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import edu1 from '../../assets/education1.jpg';
import edu2 from '../../assets/education2.jpg'
import logo from '../../assets/skill.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg='6'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={edu1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Reaserch Mathodology</h3>
                                    <p>Improve your market research with tips from our eBook.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={edu2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Graphic Design</h3>
                                    <p>Designers are meant to be loved, not to be understood.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className='mt-4 mt-lg-0' lg='6'>
                        <Card>
                            <Card.Header className='text-decoration-none text-warning' as="h5">
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top me-2"
                                />
                                Grow Your Skill
                            </Card.Header>
                            <Card.Body>
                                <Card.Title >Learn a new skill online on your time</Card.Title>
                                <Card.Text className='text-start'>
                                    “The most profound words will remain unread unless you can keep the learner engaged. You can't see their eyes to know if they got it so … say it, show it, write it, demo it and link it to an activity.” — James Bates.
                                </Card.Text>
                                <Card.Text className='text-start'>
                                    People often tout interactivity as the great benefit offered by eLearning, yet most interactivity does nothing to either engage or instruct.
                                </Card.Text>
                                <Card.Text className='text-start'>
                                    One of the most important areas we can develop as professionals is competence in accessing and sharing knowledge.Online learning is not the next big thing, it is the now big thing.eLearning is changing.And we will see new models new technologies and designs emerge. So, lets drop the or at least give it a new and wider definition.
                                </Card.Text>
                                <Link to='/courses'><Button variant="primary">Go For Courses</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;