import { Container } from "react-bootstrap";

import OfficerInfo from "../components/officer/OfficerInfo";

import classes from "./Officer.module.css"

function OfficerPage() {
    return (
        <Container>
            <OfficerInfo photo="nathan.jpg" desc="Nathan Silverstein is the Founder and President of the Polish Club at UT. He is a sophomore double majoring in Rhetoric & Writing and Government and minoring in Polish Language. His mother was born and raised in Gliwice, Poland. He is the grandson of a Polish partisan and Solidarity leader. As President, Nathan is responsible for overseeing all club activities, fundraising, and inviting guest speakers."/>
            <OfficerInfo photo="nick.jpg" desc="Nick Umbrewicz is the Vice President of the Polish Club at UT. He is a junior double majoring in International Relations and Portuguese and minoring in International Business. Nick’s father was born and raised in Gdańsk and Nick is currently taking Polish language courses at UT. As Vice President, Nick is responsible for outreach and helping make high level decisions."/>
            <OfficerInfo photo="griffin.jpg" desc="Griffin Urban is the Treasurer of the Polish Club at UT. He is a junior majoring in Computer Science and minoring in Slavic and Eurasian Languages. Griffin is fascinated by Poland and is currently enrolled in Polish language courses at UT. As Treasurer, Griffin is responsible for fundraising, accounting, and managing the club’s budget. Fun fact: using his incredible tech skills, Griffin was instrumental in helping design this website!"/>
            <OfficerInfo photo="misha.jpg" desc="Misha Simanovskyy is the Marketing Chair of the Polish Club at UT. He is a dual master’s degree student in Global Policy Studies from the Lyndon B. Johnson School of Public Affairs and Russian, East European, and Eurasian Studies from the Department of Slavic and Eurasian Studies. Misha is interested in Poland and is currently enrolled in Polish language courses at UT. As Marketing Chair, Misha is responsible for tabling and advertising the club on campus."/>
            <OfficerInfo photo="isabella.jpg" desc="Isabella Hardej is the Social Chair of the Polish Club at UT. She is an honors student majoring in Advanced Human Development and Family Sciences with a certificate in Pre-Health Professions. She is pre-med. Isabella’s mother and father were born and raised in Poland. As Social Chair, Isabella is responsible for planning social events for the club."/>
            <OfficerInfo photo="blazej.jpg" desc="Błażej Ksiazek is the Polish Language Chair of the Polish Club at UT. He started his M.S./PhD in Petroleum Engineering in 2021. Błażej’s parents are both from Dębica, Poland. As Polish Language Chair, Błażej leads the club in weekly Polish language circles where students practice speaking Polish with their peers in an informal setting." />
        </Container>
    );
}

export default OfficerPage;