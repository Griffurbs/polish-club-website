import Video from '../components/library/Video';
import { Container } from 'react-bootstrap';

function Walesa(){
    return (
        <Container>
            <div className='text-center '>
                <Video videoID="JbfYKG_K_aI" videoName="President Lech Wałęsa speech to UT Austin, May 5, 2022." desc=""/>
                <h1>President Wałęsa event photo-line pictures: <b><a href="https://daemmrichphotography.pixieset.com/lechwalesa--photoline/">Here</a></b></h1>
                <img src="/social/walesa.jpg" className='img-responsive text-center m-auto ratio ratio-16x9'/>
            </div>
        </Container>
    );
}

export default Walesa;