import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import '../../src/styles/ProfileExperience.css';
import { Button, Row, Col } from 'react-bootstrap';

export default class ProfileExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalInfo: this.props.personalInfo,
            personalExperiences: this.props.personalExperiences
        }
    }

    render() {
        return (
            <Card className="customize-card__profile-experience">
                <div className="modal-header modal-header__profile-experience">
                    <div className="customize-title__profile-experience">Experience</div>
                    <Button variant="light">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="rgba(0, 0, 0, 0.6)" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                        </svg>
                    </Button>
                </div>
                {/* <Card.Title className="customize-title__profile-experience">Experience</Card.Title> */}
                <Card.Body className="personal-body__profile-experience" >
                    {/* {this.state.personalInfo.name} {this.state.personalInfo.surname} */}
                    <div >
                        {this.state.personalExperiences.length > 0 &&
                            <Row>
                                <Col sm={1}>
                                    <img src="./images/company.jpg" alt="" className="customize-img__profile-experience" />
                                </Col>
                                <Col sm={10}>
                                    <>
                                        <ul style={{ listStyle: "none" }}>
                                            <li>
                                                <b>{this.state.personalExperiences[0].role}</b><br />
                                                {this.state.personalExperiences[0].company}<br />
                                                {this.state.personalExperiences[0].startDate}<br />
                                                {this.state.personalExperiences[0].area}<br />
                                                <b> · </b>{this.state.personalExperiences[0].description}<br />
                                            </li>
                                        </ul>
                                    </>

                                    {/*  */}

                                </Col>
                                <Col sm={1}>
                                    <Button variant="light" className="edit-btn__profile-experience">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="rgba(0, 0, 0, 0.6)" width="24" height="24" focusable="false">
                                            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                        </svg>
                                    </Button>
                                </Col>
                            </Row>
                        }
                    </div>
                </Card.Body>
                <Card.Footer ></Card.Footer>
            </Card>
        );
    }
}