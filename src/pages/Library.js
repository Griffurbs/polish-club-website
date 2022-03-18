import classes from './Library.module.css';

import { Container } from 'react-bootstrap';

import Video from "../components/library/Video";

function LibraryPage() {
    return (
        <Container fluid>
            <div className={classes.videos}>
                <Video videoID="gDb_x1uiX7g" videoName="Mr. Pawel Hardej" desc=""/>
                <Video videoID="kio_YkS5msE" videoName="Dr. Teresa Silverstein" desc=""/>
                <Video videoID="BqjbuJiQW3A" videoName="Dr. Witold Łukaszewski" desc=""/>
                <Video videoID="OVsyWsunfOE" videoName="Poloneze" desc=""/>
                <Video videoID="o0YOzdDbx0A" videoName="Ms. Margaret Meub" desc=""/>
                <Video videoID="jqmNCiOF2z4" videoName="Mr. Eric Opiela" desc=""/>
                <Video videoID="XDVf5oTKPTk" videoName="Dr. Jim Mazurkiewicz" desc=""/>
            </div>
        </Container>
        
    );
}

export default LibraryPage;