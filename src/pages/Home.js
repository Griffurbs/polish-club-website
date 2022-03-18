
import { Container } from 'react-bootstrap';
import Instagram from '../components/Instagram';
import AboutPage from './About.js'

function HomePage() {
    return (
        <Container fluid className="instagram m-auto h-100">
            <Container>
                <h1 className='text-center'><b>Welcome to the official website for the Polish Club at the University of Texas at Austin</b></h1>
                <br />
            </Container>
            <Instagram />
            <AboutPage />
        </Container>
    );
}

export default HomePage;