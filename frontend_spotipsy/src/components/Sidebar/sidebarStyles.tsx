import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
    container: {
        width: '15%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderLeft: '1px solid rgba(49, 49, 49, 1)',
    },
    allSongsButton: {
        height: '7%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: '5px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        '&:active': {
            transform: 'scale(0.98)',
},
    },
    text: {
        width: '70%',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    icon: {
        width: '30%',
        display: 'flex',
        justifyContent: 'center'
    },
}));

export default useStyles;