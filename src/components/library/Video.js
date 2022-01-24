import { Container, Row } from 'react-bootstrap';
import classes from './Video.module.css'

function Video(props){
    return (
        <Container fluid>
            <Row className="ratio ratio-16x9 m-auto">
                <iframe
                    src={`https://www.youtube.com/embed/${props.videoID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Row>
            <Row>
                <br />
                <h className={classes.videotitle}>{props.videoName}</h>
            </Row>
        </Container>
    );
}

export default Video;