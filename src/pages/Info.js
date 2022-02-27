import { Container } from "react-bootstrap";
import AboutPage from "./About";
import ContactPage from "./Contact";
import OfficerPage from "./Officer";

function InfoPage(){
    return (
        <Container fluid>
            <h1 className="text-center">About Us</h1>
            <AboutPage />
            <h1 className="text-center">Officers</h1>
            <OfficerPage />
            <h1 className="text-center">Contact Us!</h1>
            <ContactPage />
        </Container>
    );
}

export default InfoPage;