
import { Container, Row } from 'react-bootstrap';

function HomePage() {
    return (
        <div>
            <Container fluid>
                <Row className="ratio ratio-1x1 m-auto">
                    <iframe src='./instagram.html' style={{width: 540, height: 570}} className='m-auto' />
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;