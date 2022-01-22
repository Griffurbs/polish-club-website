import classes from './Banner.module.css';
import Social from './Social';

function Banner(){
    return (
        <div className={classes.banner}>
            <div className={classes.title}>Polish Club at UT</div>
            <div className={classes.media}>
                <Social imgName="instagram.png" link="https://www.instagram.com/polishclubatut/" className={classes.mediaicon} />
                <Social imgName="facebook.png" link="https://www.facebook.com/PolishClubatUT" className={classes.mediaicon} />
            </div>
        </div>
    );
}

export default Banner;