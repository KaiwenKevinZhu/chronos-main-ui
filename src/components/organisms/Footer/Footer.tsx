import { CustomTheme } from "@/theme";
import { makeStyles } from "@material-ui/core";

//0. Interface
export interface FooterInterface {
    theme?: CustomTheme;
    isLogin?: boolean;
}

//1. Style
const useStyles = makeStyles(() => ({
    box: {

    }
}));

//2. Main class
const Footer = (props:FooterInterface):JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            Footer
        </div>
    );
};

export default Footer;