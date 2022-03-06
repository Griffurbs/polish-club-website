import classes from './Banner.module.css';
import Social from './Social';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col } from 'react-bootstrap';

function Banner(){
    return (
        <div className={classes.bannerContainer}>
                <Container fluid="true">
                    <Row>
                        <Col>
                            <div className={classes.title + " h-100 m-2"}>Polish Club at UT</div>
                        </Col>
                        <Col>
                            <Container>
                                <div className="float-end">
                                    <Row xs="auto">
                                        <Col className="p-1">
                                            <Social imgName="instagram.png" link="https://www.instagram.com/polishclubatut/" className={classes.mediaicon} />
                                        </Col>
                                        <Col className="p-1">
                                            <Social imgName="facebook.png" link="https://www.facebook.com/PolishClubatUT" className={classes.mediaicon} />
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}

export default Banner;