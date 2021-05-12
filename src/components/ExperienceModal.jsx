import React, { Component } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjAyMjczNzAsImV4cCI6MTYyMTQzNjk3MH0.p6GxtmtZE5QZ0rhZCB4Kxt1z3GlHOTEnByED_yMOiNU");
myHeaders.append("Content-Type", "application/json");

class ExperienceModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            experience: {}
        }
    }

    componentDidMount(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.setState({ experience: this.props.selectedexperience })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.setState({ experience: this.props.selectedexperience })
        }
    }

    DeleteExperience = () => {
        var myHeadersForDelete = new Headers();
        myHeadersForDelete.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjAyMjczNzAsImV4cCI6MTYyMTQzNjk3MH0.p6GxtmtZE5QZ0rhZCB4Kxt1z3GlHOTEnByED_yMOiNU");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeadersForDelete
        };

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${this.props.personalinfo._id}/experiences/${this.state.experience._id}`, requestOptions)
            .then(response => response.json())
            .then(result => { return (window.location.reload()) })
            .catch(error => console.log('error', error));
    }

    AddNewExperience = () => {
        var raw = JSON.stringify({
            ...this.state.experience,
            "username": this.props.personalinfo.username,
            "user": this.props.personalinfo._id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${this.props.personalinfo._id}/experiences`, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert("New Experience Added")
                return (window.location.reload())
            })
            .catch(error => alert(error));
    }

    EditExperience = () => {
        var raw = JSON.stringify({
            ...this.state.experience,
            "username": this.props.personalinfo.username,
            "user": this.props.personalinfo._id
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${this.props.personalinfo._id}/experiences/${this.state.experience._id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                alert("Experience Edited")
                return (window.location.reload())
            })
            .catch(error => alert(error));
    }

    render() {
        if (!this.props.selectedexperience._id) {
            return (<>
                {
                    <Modal {...this.props} >
                        <Modal.Header closeButton>
                            <Modal.Title>Add experience</Modal.Title>
                        </Modal.Header>
                        <Container>
                            <Form onSubmit={this.submitEdititon}>
                                <Form.Group className="my-3" controlId="role">
                                    <Form.Label>Title *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ex: Retail Sales Manager"
                                        value={this.state.experience.role || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                role: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="my-3" controlId="company">
                                    <Form.Label >Company  *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ex: Microsoft"
                                        value={this.state.experience.company || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                company: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="area">
                                    <Form.Label >Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ex: London, United Kingdom"
                                        value={this.state.experience.area || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                area: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="startDate">
                                    <Form.Label>Start Date *</Form.Label>
                                    <Form.Control
                                        value={this.state.experience.startDate || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                startDate: e.currentTarget.value
                                            }
                                        })}
                                        type="datetime" />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={this.state.experience.description || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                description: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>

                            </Form>
                        </Container>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => this.AddNewExperience()}>
                                Add New Experience
                            </Button>
                        </Modal.Footer>
                    </Modal>
                }
            </>)

        }
        else if (this.props.selectedexperience._id) {
            return (<>
                {
                    <Modal {...this.props} >
                        <Modal.Header closeButton>
                            <Modal.Title>Add experience</Modal.Title>
                        </Modal.Header>
                        <Container>
                            <Form onSubmit={this.submitEdititon}>
                                <Form.Group className="my-3" controlId="role">
                                    <Form.Label >Title *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ex: Retail Sales Manager"
                                        value={this.state.experience.role || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                role: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>
                                <Form.Group className="my-3" controlId="company">
                                    <Form.Label >Company  *</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ex: Microsoft"
                                        value={this.state.experience.company || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                company: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="area">
                                    <Form.Label >Location</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ex: London, United Kingdom"
                                        value={this.state.experience.area || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                area: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="startDate">
                                    <Form.Label>Start Date *</Form.Label>
                                    <Form.Control
                                        value={this.state.experience.startDate || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                startDate: e.currentTarget.value
                                            }
                                        })}
                                        type="datetime" />
                                </Form.Group>

                                <Form.Group className="my-3" controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        value={this.state.experience.description || ''}
                                        onChange={(e) => this.setState({
                                            experience: {
                                                ...this.state.experience,
                                                description: e.currentTarget.value
                                            }
                                        })}
                                    />
                                </Form.Group>

                            </Form>
                        </Container>
                        <Modal.Footer>
                            <Button variant="danger" onClick={() => this.DeleteExperience()}>
                                DELETE
                           </Button>
                            <Button variant="primary" onClick={() => this.EditExperience()}>
                                Edit Experience
                            </Button>
                        </Modal.Footer>
                    </Modal>
                }
            </>)

        }
    }
}

export default ExperienceModal;