import classes from './Library.module.css';

import { Container } from 'react-bootstrap';

import Video from "../components/library/Video";

function LibraryPage() {
    return (
        <Container fluid>
            <div className={classes.videos}>
                <Video videoID="gDb_x1uiX7g" videoName="Pawel Hardej" desc=""/>
                <Video videoID="kio_YkS5msE" videoName="Teresa Silverstein" desc=""/>
                <Video videoID="BqjbuJiQW3A" videoName="Dr. Witold Łukaszewski" desc=""/>
                <Video videoID="OVsyWsunfOE" videoName="Poloneze" desc=""/>
                <Video videoID="o0YOzdDbx0A" videoName="Margaret Meub" desc=""/>
                <Video videoID="jqmNCiOF2z4" videoName="Eric Opiela" desc=""/>
                <Video videoID="XDVf5oTKPTk" videoName="Dr. Jim Mazurkiewicz" desc=""/>
            </div>
        </Container>
        
    );
}

export default LibraryPage;