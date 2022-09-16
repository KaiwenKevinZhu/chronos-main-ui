import { Grid, makeStyles, Paper, Box} from "@material-ui/core";
import { useRouter } from "next/router";
import { GlobalTheme } from "../../../theme";


//1. Style
const useStyles = makeStyles<GlobalTheme>((theme) => ({
    rightbottomimage: {
        src:'/resources/home/home_image.png'
    }
}));

//2. Main class
const HomeIndex = ():JSX.Element => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <div className={classes.box}>
            <Grid
            item
            >
                <Paper>
                    <Box>
                        <img src={'/resources/home/main_image.png'}></img>
                    </Box>
                    <Box>
                        <img src={'/resources/home/home_image.png'}></img>
                    </Box>
                    HomeIndex
                </Paper>
            </Grid>
        </div>
    );
};

export default HomeIndex;