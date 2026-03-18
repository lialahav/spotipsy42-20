import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        width: '95%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listContainer: {
        width: '97%',
    },
    buttonContainer: {
        borderRadius: '20px',
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        height: '43px'
    }

}));

export default useStyles;