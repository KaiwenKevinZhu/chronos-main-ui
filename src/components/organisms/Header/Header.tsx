import { CustomTheme } from "@/theme";
import { makeStyles } from "@material-ui/core";

//0. Interface
export interface HeaderInterface {
    theme?: CustomTheme;
    isLogin?: boolean;
}

//1. Style
const useStyles = makeStyles(() => ({
    box: {

    }
}));

//2. Main class
const Header = (props : HeaderInterface):JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            Header
        </div>
    );
};

export default Header;