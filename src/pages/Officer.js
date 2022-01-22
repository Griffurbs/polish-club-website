import OfficerInfo from "../components/officer/OfficerInfo";

import classes from "./Officer.module.css"

function OfficerPage() {
    return (
        <div className={classes.officerpage}>
            <OfficerInfo />
        </div>
    );
}

export default OfficerPage;