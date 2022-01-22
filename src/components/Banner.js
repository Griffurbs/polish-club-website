import classes from './Banner.module.css';
import Social from './Social';

function Banner(){
    return (
        <div className={classes.bannerContainer}>
            <div className={classes.banner}>
                <div className={classes.title}>Polish Club at UT</div>
                <div className={classes.media}>
                    <div className={classes.mediaicon}>
                        <form action="https://www.paypal.com/donate" method="post" target="_top">
                            <input type="hidden" name="hosted_button_id" value="G8TUX8SPHFSA6" />
                            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </div>
                    <Social imgName="instagram.png" link="https://www.instagram.com/polishclubatut/" className={classes.mediaicon} />
                    <Social imgName="facebook.png" link="https://www.facebook.com/PolishClubatUT" className={classes.mediaicon} />
                </div>
            </div>
        </div>
    );
}

export default Banner;