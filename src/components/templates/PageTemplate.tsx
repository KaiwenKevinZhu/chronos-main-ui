import { makeStyles } from "@material-ui/core";

//0. Interface
export interface PageTemplateInterface {

}

//1. Style
const useStyles = makeStyles(() => ({
    box: {

    }
}));

//2. Main class
const PageTemplate = ( props:PageTemplateInterface ):JSX.Element => {
    const classes = useStyles();
    return (
        <div className={classes.box}>
            
        </div>
    );
};

export default PageTemplate;