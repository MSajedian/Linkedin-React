import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


export default class ProfileAbstract extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <Card >
                <Card.Img variant="top" src="https://via.placeholder.com/800x250" alt="800x250" className="img-fluid" />
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>
                        name<br />
                        job<br />
                        country (Contact info)<br />
                        connections<br />
                        Open to<br />
                        Add section<br />
                        More<br />
                        Experience<br />
                        Education
          </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>);
    }
}