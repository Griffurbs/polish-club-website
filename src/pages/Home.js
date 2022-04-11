
import { Container } from 'react-bootstrap';
import Instagram from '../components/Instagram';
import AboutPage from './About.js'

function HomePage() {
    return (
        <Container fluid className="instagram m-auto h-100">
            <Container>         
                <div className='text-center '>
                    <img src="/social/emblem.jpg" className='img-responsive text-center m-auto'/>
                    <h1><b>Welcome to the official website for the Polish Club at the University of Texas at Austin</b></h1>
                </div>
                <br />
            </Container>
            <Instagram />
            <AboutPage />
        </Container>
    );
}

export default HomePage;