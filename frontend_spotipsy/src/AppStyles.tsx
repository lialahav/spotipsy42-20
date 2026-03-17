import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    mainContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(20, 20, 20, 1)'
    },
    mainSection: {
        width: '100%',
        height: '86%',
        display: 'flex'
    }

});

export default useStyles;