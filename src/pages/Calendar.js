import { Container, Row } from "react-bootstrap";

function CalendarPage() {
    return (
        <div>
            <Container>
                <Row className="m-auto">
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showPrint=0&showTabs=0&showNav=0&showDate=0&showCalendars=0&showTz=1&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000" style={{border: "solid 1px #777"}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                </Row>
            </Container>
        </div>
    );
}

export default CalendarPage;