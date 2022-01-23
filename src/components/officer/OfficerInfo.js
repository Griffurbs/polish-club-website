import { Container, Image, Row, Col } from 'react-bootstrap';
import classes from './OfficerInfo.module.css'

function OfficerInfo(props) {

    return (
      <div>
        {/* <div className={classes.officer}>
          <div className={classes.picture}>
            <Image src={"./" + props.photo} thumbnail="true" fluid="true"/>
            <img src={"./" + props.photo}/>
          </div>
        </div>
        <div>
          {props.desc}
        </div> */}
        <Container>
          <Row>
            <Col>
              <Image src={"./" + props.photo} thumbnail="true" fluid="true"/>
            </Col>
            <Col>
              {props.desc}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default OfficerInfo;
  