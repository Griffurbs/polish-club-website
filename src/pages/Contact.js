import { Container } from "react-bootstrap";

function ContactPage() {
    return (
        <Container>
            <div className="lead" style={{padding: 10}}>
                Email us at: &nbsp;
                <a href = "mailto: texaspolishclub@gmail.com">texaspolishclub@gmail.com</a>
            </div>
        </Container>
    );
}

export default ContactPage;