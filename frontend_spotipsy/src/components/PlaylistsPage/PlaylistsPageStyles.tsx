import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
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

});

export default useStyles;