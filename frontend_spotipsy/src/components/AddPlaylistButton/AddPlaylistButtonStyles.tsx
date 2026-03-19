import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    buttonContainer: {
        borderRadius: '20px',
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        height: '43px'
    }

}));

export default useStyles;