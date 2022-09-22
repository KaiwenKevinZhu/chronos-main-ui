
import { makeStyles, Toolbar, AppBar, Button, Box, Theme, Grid} from "@material-ui/core";
import { useRouter } from "next/router";

//0. Interface
export interface HeaderInterface {
    theme?: Theme;
    isLogin?: boolean;
}

//1. Style
const useStyles = makeStyles(() => ({
    appBar: {
        color: 'primary'
    },
    headerSpace: {
        flex: '1 1 auto'
    }
}));

//2. Main class
const Header = (props : HeaderInterface):JSX.Element => {
    const classes = useStyles(props.theme);
    const router = useRouter();
    return (
        <Box className={classes.headerBox}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img 
                        src='/resources/home/logo.png'
                        alt=''
                        width={'50px'}
                        style={{ cursor: 'pointer'}}
                        onClick={() => {
                            router.push('/')
                        }}
                    />
                    <div className={classes.headerSpace}/>
                    <Button>Home</Button>
                    <Button>Profile</Button>
                    <Button>Blogs</Button>
                    <Button>Projects</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;