import classes from './OfficerInfo.module.css'

function OfficerInfo() {

    return (
      <div>
        <div className={classes.officer}>
          <div className={classes.picture}>
            <img src="./griffin.jpg"/>
          </div>
          <div className={classes.info}>
            <ul>
              <li>
                Griffin Urban
              </li>
              <li>
                CS Major
              </li>
              <li>
                Treasurer
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </div>
      </div>
    );
  }
  
  export default OfficerInfo;
  