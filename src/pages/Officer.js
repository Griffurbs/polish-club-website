import OfficerInfo from "../components/officer/OfficerInfo";

import classes from "./Officer.module.css"

function OfficerPage() {
    return (
        <div className={classes.officerpage}>
            <OfficerInfo photo="nathan.jpg" desc="Nathan Silverstein is the Founder and President of the Polish Club at UT. He is a sophomore double majoring in Rhetoric & Writing and Government and minoring in Polish Language. His mother was born and raised in Gliwice, Poland. He is the grandson of a Polish partisan and Solidarity leader. As President, Nathan is responsible for overseeing all club activities, fundraising, and inviting guest speakers."/>
            <OfficerInfo photo="nick.jpg" desc="Nick Umbrewicz is the Vice President of the Polish Club at UT. He is a junior double majoring in International Relations and Portuguese and minoring in International Business. Nick’s father was born and raised in Gdańsk and Nick is currently taking Polish language courses at UT. As Vice President, Nick is responsible for outreach and helping make high level decisions."/>
            <OfficerInfo photo="griffin.jpg" desc="Griffin Urban is the Treasurer of the Polish Club at UT. He is a junior majoring in Computer Science and minoring in Slavic and Eurasian Languages. Griffin is fascinated by Poland and is currently enrolled in Polish language courses at UT. As Treasurer, Griffin is responsible for fundraising, accounting, and managing the club’s budget. Fun fact: using his incredible tech skills, Griffin was instrumental in helping design this website!"/>
            <OfficerInfo photo="misha.jpg" desc="Misha Simanovskyy is the Marketing Chair of the Polish Club at UT. He is a dual master’s degree student in Global Policy Studies from the Lyndon B. Johnson School of Public Affairs and Russian, East European, and Eurasian Studies from the Department of Slavic and Eurasian Studies. Misha is interested in Poland and is currently enrolled in Polish language courses at UT. As Marketing Chair, Misha is responsible for tabling and advertising the club on campus."/>
            <OfficerInfo photo="alex.jpg" desc="Alex Meub is the Public Relations Chair of the Polish Club at UT. She is a sophomore majoring in Government with a certificate in Environment and Sustainability. Alex’s mother is from Radzymin, Poland and is the President of the Austin Polish Society (APS). Alex is also currently taking Polish language courses at UT. As Public Relations Chair, Alex is responsible for promoting the club on social media, making fliers, and doing graphic design work."/>
            <OfficerInfo photo="isabella.jpg" desc="Isabella Hardej is the Social Chair of the Polish Club at UT. She is an honors student majoring in Advanced Human Development and Family Sciences with a certificate in Pre-Health Professions. She is pre-med. Isabella’s mother and father were born and raised in Poland. As Social Chair, Isabella is responsible for planning social events for the club."/>
        </div>
    );
}

export default OfficerPage;