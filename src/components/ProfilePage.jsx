import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './MainNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileAbstract from './ProfileAbstract';
// import ModalExample from './ModalExample';
// import Test from './Test';

// const  = () => {
//     return (  );
// }
// export default ;

function ProfilePage() {
    return (
        <>
            <MainNavbar />
            <div className="text-center">
                <a href="/" >Get started today - <span> Transform learning into business impact Ad</span> </a>
            </div>
            <Container>
                <Row>
                    <Col sm={9}><ProfileAbstract /></Col>
                    <Col sm={3}><ProfileAbstract /></Col>
                </Row>
                {/* <Test /> */}
                {/* <ModalExample /> */}
            </Container>
        </>
    );
}

export default ProfilePage;
