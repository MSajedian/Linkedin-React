import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileAbstract from './ProfileAbstract';
import ProfileExperience from './ProfileExperience';
import Ad from './Ad';
// import ModalExample from './ModalExample';
// import Test from './Test';

var Pe_id = "6092b52a0253aa0015964a59";

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDkyYjUyYTAyNTNhYTAwMTU5NjRhNTkiLCJpYXQiOjE2MjAyMjczNzAsImV4cCI6MTYyMTQzNjk3MH0.p6GxtmtZE5QZ0rhZCB4Kxt1z3GlHOTEnByED_yMOiNU");

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IspersonalInfo: false,
            personalInfo: {},
            IspersonalExperiences: false,
            personalExperiences: []
        }
    }
    fetchPersonalExperiences = () => {

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${Pe_id}/experiences`, requestOptions)
            .then(response => response.json())
            .then(Experiences => {
                this.setState({ personalExperiences: Experiences })
                this.setState({ IspersonalExperiences: true })
            })
            .catch(error => console.log('error', error));
    }

    fetchPersonalInfo = () => {

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://striveschool-api.herokuapp.com/api/profile/${Pe_id}`, requestOptions)
            .then(response => response.json())
            .then(information => {
                this.setState({ personalInfo: information })
                this.setState({ IspersonalInfo: true })
            })
            .catch(error => console.log('error', error));
    }

    componentDidMount() {
        this.fetchPersonalInfo()
        this.fetchPersonalExperiences()
    }
    render() {
        return (
            <>
                <div className="text-center">
                    <a href="/" >Get started today - <span> Transform learning into business impact Ad</span> </a>
                </div>
                <Container>
                    {this.state.IspersonalInfo && this.state.IspersonalExperiences &&
                        <Row>
                            <Col sm={9}>
                                <ProfileAbstract
                                    personalInfo={this.state.personalInfo}
                                    personalExperiences={this.state.personalExperiences}
                                />
                                <ProfileExperience
                                    personalInfo={this.state.personalInfo}
                                    personalExperiences={this.state.personalExperiences}
                                />
                            </Col> <Col sm={3}>
                                <Ad />
                            </Col>
                        </Row>
                    }

                    {/* <Test /> */}
                    {/* <ModalExample /> */}
                </Container>
            </>
        );
    }
}

;