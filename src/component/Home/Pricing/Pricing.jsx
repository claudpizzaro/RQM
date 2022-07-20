import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import React from 'react';
import PricingCard from './PricingCard';
import './Pricing.css';
import { PricingData } from '../../PricingData';
import sPic1 from '../../../Assets/s1.png';
import sPic2 from '../../../Assets/s2.png';
import sPic3 from '../../../Assets/s3.png';
import sPic4 from '../../../Assets/s4.png';
import sPic5 from '../../../Assets/s5.png';
import sPic6 from '../../../Assets/s6.png';
import Spinner from '../../Shared/Spinner/Spinner';
const Pricing = () => {
    return (
        <section className="">
            <h4 className=""></h4>
            <div className="">
                <h2 className=""></h2>
            </div>
            <Container>
                <Tab.Container defaultActiveKey=""> 
                    <Row>
                        <Col md={10} className="mx-auto">
                            <Nav className="pricingNav">
                                <Nav.Item className="">
                                    <Nav.Link eventKey="">
                                        <img src={``} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="">
                                        <img src={``} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="">
                                        <img src={``} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="">
                                        <img src={``} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="">
                                        <img src={``} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="">
                                    <Nav.Link eventKey="">
                                        <img src={``} alt="" />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                       </Col>
                        <Tab.Content>
                        {
                            PricingData.length === 0 ?
                            <div className="spinner text-center mt-3"><Spinner/></div>:
                            PricingData.map((data, index) => <PricingCard id={index} data={data} key={index}/>)
                        }
                        </Tab.Content>
                    </Row>
                </Tab.Container>
            </Container>
        </section>
    );
};

export default Pricing;