import { Container } from "react-bootstrap";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment)

const eventlist = [
    {
        id: 0,
        title: 'Intro',
        start: new Date(2022, 0, 19, 18),
        end: new Date(2022, 0, 19, 19)
    },
    {
        id: 1,
        title: 'No meeting',
        start: new Date(2022, 0, 26, 18),
        end: new Date(2022, 0, 26, 19)
    },
    {
        id: 2,
        title: 'WOŚP',
        allDay: true,
        start: new Date(2022, 0, 29),
        end: new Date(2022, 0, 30)
    },
    {
        id: 3,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 1, 2, 18),
        end: new Date(2022, 1, 2, 19)
    },
    {
        id: 4,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 1, 9, 18),
        end: new Date(2022, 1, 9, 19)
    },
    {
        id: 5,
        title: 'Cooking',
        allDay: true,
        start: new Date(2022, 1, 13),
        end: new Date(2022, 1, 13)
    },
    {
        id: 6,
        title: 'Shana Penn Speaking Event',
        start: new Date(2022, 1, 16, 18),
        end: new Date(2022, 1, 16, 19)
    },
    {
        id: 7,
        title: 'Travel to Ziggi\'s Market',
        allDay: true,
        start: new Date(2022, 1, 20),
        end: new Date(2022, 1, 20)
    },
    {
        id: 8,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 1, 23, 18),
        end: new Date(2022, 1, 23, 19)
    },
    {
        id: 9,
        title: 'No meeting',
        start: new Date(2022, 2, 2, 18),
        end: new Date(2022, 2, 2, 19)
    },
    {
        id: 10,
        title: 'Eent at Dr Jim\'s House',
        allDay: true,
        start: new Date(2022, 2, 3),
        end: new Date(2022, 2, 3)
    },
    {
        id: 11,
        title: 'Jonathan Ornstein speaking event',
        start: new Date(2022, 2, 6, 18),
        end: new Date(2022, 2, 6, 19)
    },
    {
        id: 12,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 2, 9, 18),
        end: new Date(2022, 2, 9, 19)
    },
    {
        id: 13,
        title: 'No meeting (Spring Break)',
        start: new Date(2022, 2, 16, 18),
        end: new Date(2022, 2, 16, 19)
    },
    {
        id: 14,
        title: 'Dr. Davies Speaking Event',
        start: new Date(2022, 2, 19, 18),
        end: new Date(2022, 2, 19, 19)
    },
    {
        id: 15,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 2, 23, 18),
        end: new Date(2022, 2, 23, 19)
    },
    {
        id: 16,
        title: 'TAMPA comes to Austin',
        allDay: true,
        start: new Date(2022, 2, 26),
        end: new Date(2022, 2, 26)
    },
    {
        id: 17,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 2, 30, 18),
        end: new Date(2022, 2, 30, 19)
    },
    {
        id: 18,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 3, 6, 18),
        end: new Date(2022, 3, 6, 19)
    },
    {
        id: 19,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 3, 13, 18),
        end: new Date(2022, 3, 13, 19)
    },
    {
        id: 20,
        title: 'Cooking / Easter',
        allDay: true,
        start: new Date(2022, 3, 17),
        end: new Date(2022, 3, 17)
    },
    {
        id: 21,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 3, 20, 18),
        end: new Date(2022, 3, 20, 19)
    },
    {
        id: 22,
        title: 'PALS Polish Language Circle',
        start: new Date(2022, 3, 27, 18),
        end: new Date(2022, 3, 27, 19)
    },
    {
        id: 23,
        title: 'Polish Festival in Houston',
        allDay: true,
        popup: true,
        start: new Date(2022, 4, 7),
        end: new Date(2022, 4, 7)
    },
    {
        id: 24,
        title: 'Lech Wałęsa Speaking Event',
        allDay: true,
        popup: true,
        start: new Date(2022, 4, 5, 17),
        end: new Date(2022, 4, 5, 19)
    },
]

function CalendarPage() {
    return (
        <div>
            <Container>
                <Calendar 
                    localizer={localizer}
                    events={eventlist}
                    startAccessor="start"
                    endAccessor="end"
                    style={{height:500}}
                    popup="true"
                />
            </Container>
        </div>
    );
}

export default CalendarPage;