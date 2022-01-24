import classes from './Library.module.css';

import { Container } from 'react-bootstrap';

import Video from "../components/library/Video";

function LibraryPage() {
    return (
        <Container fluid>
            <div className={classes.title}>
                <h>Library Page</h>
            </div>
            <br />
            <div className={classes.videos}>
                <Video videoID="9ZfN87gSjvI" videoName="Test Video"/>
                <Video videoID="9ZfN87gSjvI" videoName="Test Video"/>
            </div>
        </Container>
        
    );
}

export default LibraryPage;