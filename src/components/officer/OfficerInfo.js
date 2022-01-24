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
            <Col className='m-auto'>
              <div>
                <Image src={"./" + props.photo} fluid="true" className="col-md-4 mb-3 ms-md-3 float-sm-start"/>
                <div className="lead">{props.desc}</div>
              </div>
              
            </Col>
            {/* <Col>
              {props.desc}
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
  
  export default OfficerInfo;
  