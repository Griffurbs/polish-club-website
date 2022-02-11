import classes from './Library.module.css';

import { Container } from 'react-bootstrap';

import Video from "../components/library/Video";

function LibraryPage() {
    return (
        <Container fluid>
            <div className={classes.videos}>
                <Video videoID="gDb_x1uiX7g" videoName="Pawel Hardej"/>
                <Video videoID="kio_YkS5msE" videoName="Teresa Silverstein"/>
                <Video videoID="BqjbuJiQW3A" videoName="Dr. Witold Łukaszewskib"/>
                <Video videoID="OVsyWsunfOE" videoName="Poloneze"/>
                <Video videoID="o0YOzdDbx0A" videoName="Margaret Meub"/>
                <Video videoID="jqmNCiOF2z4" videoName="Eric Opiela"/>
                <Video videoID="XDVf5oTKPTk" videoName="Dr. Jim Mazurkiewicz"/>
            </div>
        </Container>
        
    );
}

export default LibraryPage;