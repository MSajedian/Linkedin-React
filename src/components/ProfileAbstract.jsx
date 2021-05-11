import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../../src/styles/ProfileAbstract.css';
import { Button, Row, Col } from 'react-bootstrap';

export default class ProfileAbstract extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: this.props.personalInfo,
            personalExperiences: this.props.personalExperiences
        }
    }

    render() {
        return (
            <Card className="customize-card__profile-abstract">
                <Card.Img variant="top" src="https://via.placeholder.com/800x200" alt="800x200" className="customize-img__profile-abstract" />
                <Card.Body className="m-1">
                    <img src={this.state.personalInfo.image} alt="140x140" className="personal-img__profile-abstract" />
                    <Card.Title className="customize-title__profile-abstract">{this.state.personalInfo.name} {this.state.personalInfo.surname}</Card.Title>
                    <div >
                        <Row>
                            <Col sm={8}>
                                <div className="title__profile-abstract">{this.state.personalInfo.title}</div>
                                <span className="area__profile-abstract" style={{ color: 'grey' }}>{this.state.personalInfo.area}</span>
                                <b> · </b> <a href={`mailto:${this.state.personalInfo.email}`} style={{ textDecoration: 'none' }}>Contact info</a><br />
                                <Button variant="primary" className="customize-button__profile-abstract customize-button-open-to__profile-abstract">Open to</Button>
                                <Button variant="outline-secondary" className="customize-button__profile-abstract">Add section</Button>
                                <Button variant="outline-secondary" className="customize-button__profile-abstract">More</Button><br /><br />

                            </Col>
                            <Col sm={4}>
                                {this.state.personalExperiences[0] &&
                                    <ul style={{ listStyle: "none" }}>
                                        <li>
                                            <img src="./images/company.jpg" alt="" />{this.state.personalExperiences[0].company}
                                        </li>
                                        {this.state.personalExperiences[1] &&
                                            <li>
                                                <img src="./images/company.jpg" alt="" />{this.state.personalExperiences[1].company}
                                            </li>
                                        }
                                    </ul>
                                }
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}