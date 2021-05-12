import React, { Component } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';

class ExperienceModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Modal {...this.props}>
                <Modal.Header closeButton>
                    <Modal.Title>Add experience</Modal.Title>
                </Modal.Header>
                <Container>
                    <Form>
                        <Form.Group controlId="AddExperienceForm.ControlInputTitle" className="my-3">
                            <Form.Label >Title *</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Retail Sales Manager" />
                        </Form.Group>

                        <Form.Group controlId="AddExperience.ControlSelectEmploymentType" className="my-3">
                            <Form.Label>Employment type</Form.Label>
                            <Form.Control as="select">
                                <option>-</option>
                                <option>Full-time</option>
                                <option>Part-time</option>
                                <option>Self-employed</option>
                                <option>Freelance</option>
                                <option>Contract</option>
                                <option>Internship</option>
                                <option>Apprenticeship</option>
                                <option>Temporary</option>
                            </Form.Control>
                            <Form.Label>Country-specific employment types</Form.Label>
                        </Form.Group>

                        <Form.Group controlId="AddExperience.ControlInputCompany" className="my-3">
                            <Form.Label >Company  *</Form.Label>
                            <Form.Control type="text" placeholder="Ex: Microsoft" />
                        </Form.Group>

                        <Form.Group controlId="AddExperience.ControlInputCompany" className="my-3">
                            <Form.Label >Location</Form.Label>
                            <Form.Control type="text" placeholder="Ex: London, United Kingdom" />
                        </Form.Group>

                        <Form.Group controlId="AddExperience.CheckboxCurrentlyWorking">
                            <Form.Check type="checkbox" label="I am currently working in this role" />
                        </Form.Group>

                        <Form.Group controlId="AddExperience.ControlSelectStartDateMonth" className="my-3">
                            <Form.Label>Start Date *</Form.Label>
                            <Form.Control as="select">
                                <option>Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="AddExperience.ControlSelectStartDateYear" className="my-3">

                            <Form.Control as="select">
                                <option>Year</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="AddExperience.CheckboxUpdateIndustry">
                            <Form.Check type="checkbox" label="Update my industry" />
                        </Form.Group>

                        <Form.Group controlId="AddExperience.CheckboxUpdateHeadline">
                            <Form.Check type="checkbox" label="Update my headline" />
                        </Form.Group>

                        <Form.Group controlId="AddExperience.ControlTextareaHeadline">
                            <Form.Label>Headline *</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>

                        <Form.Group controlId="AddExperience.ControlTextareaDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>


                        <Form.Label>Media</Form.Label>
                        <Form.Label>Add or link to external documents, photos, sites, videos, and presentations.</Form.Label>
                        <Form.File
                            id="AddExperience.customFileUpload"
                            label="Upload"
                            custom
                        />

                        <Form.File
                            id="AddExperience.customFileLink"
                            label="Link"
                            custom
                        />

                    </Form>
                </Container>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseExperience}>
                        Close
                               </Button>
                    <Button variant="primary" onClick={this.handleCloseExperience}>
                        Save Changes
                                </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ExperienceModal;