
import { Container } from 'react-bootstrap';
import Instagram from '../components/Instagram';

function HomePage() {
    return (
        <Container fluid className="instagram m-auto h-100">
            <Instagram />
        </Container>
    );
}

export default HomePage;