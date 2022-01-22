import classes from './Library.module.css';

import Video from "../components/library/Video";

function LibraryPage() {
    return (
        <div>
            <div className={classes.title}>
                <h>Library Page</h>
            </div>
            <br />
            <div className={classes.videos}>
                <Video videoID="9ZfN87gSjvI" videoName="Test Video"/>
                <Video videoID="9ZfN87gSjvI" videoName="Test Video"/>
            </div>
        </div>
        
    );
}

export default LibraryPage;