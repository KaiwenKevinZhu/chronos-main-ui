import { useRouter } from "next/router";
import { Grid, makeStyles, Paper, Box} from "@material-ui/core";

//1. Style
const useStyles = makeStyles(() => ({
    box: {

    }
}));

//2. Main class
const ProfileIndex = ():JSX.Element => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <div className={classes.box}>
            <Grid item>
                <Paper>
                    <Box>
                        <img src={'/resources/home/second_home_image.png'}></img>
                    </Box>
                </Paper>
            </Grid>
        </div>
    );
};

export default ProfileIndex;