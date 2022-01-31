import { Container, Image, Row, Col } from 'react-bootstrap';

function OfficerInfo(props) {

    return (
      <div>
        <Container>
          <Row>
            <Col className='m-auto'>
              <div>
                <Image src={"./officers/" + props.photo} fluid="true" className="col-md-4 mb-3 ms-md-3 float-sm-start"/>
                <div className="lead">{props.desc}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default OfficerInfo;
  