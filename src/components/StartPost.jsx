import React, { Component } from 'react';
import { Card, Button, Form } from 'react-bootstrap';


class StartPost extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Card className="my-3">
                    <Card.Body>
                        <Form>
                            <Button variant="light" style={{border:"1px solid gray"}}>Start a Post</Button> 
                            {/* <Button variant="dark">Start a Post</Button> */}
                        </Form>
                    </Card.Body>
                </Card>

            </>
        );
    }
}


export default StartPost;