import classes from './Video.module.css'

function Video(props){
    return (
        <div className={classes.video}>
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${props.videoID}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <br />
                <h className={classes.videotitle}>{props.videoName}</h>
        </div>
    );
}

export default Video;