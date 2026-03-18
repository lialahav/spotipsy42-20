import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    container: {
        backgroundColor: 'rgba(59, 59, 59, 1)',
        width: '100%',
        height: '6%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid rgba(94, 94, 94, 1)'
        
    },
    headerContainer: {
        width: '95%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: theme.palette.primary.main,
        
    }

}));

export default useStyles;