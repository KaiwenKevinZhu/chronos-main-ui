import { makeStyles, Typography, Box } from "@material-ui/core";
import CookieConsent from "react-cookie-consent";
import { HomeIndex, ProfileIndex } from "./components";


//1. Style
const useStyles = makeStyles(() => ({
    box: {

    }
}));

//2. Main class
const HomePage = ():JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            <CookieConsent 
                location="bottom" 
                overlay
                buttonText="Accept Cookies">
            <Typography>
                Agree to use of cookies.
            </Typography>
            </CookieConsent>

            <Box>
                <HomeIndex></HomeIndex>
            </Box>
            <Box>
                <ProfileIndex></ProfileIndex>
            </Box>
        </div>
    );
};

export default HomePage;