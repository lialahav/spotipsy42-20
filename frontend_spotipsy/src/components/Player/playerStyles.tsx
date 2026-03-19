import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    container: {
        backgroundColor: 'rgba(32, 32, 32, 1)',
        flexDirection: 'column',
        width: '100%',
        height: '13%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTop: '1px solid rgba(49, 49, 49, 1)',

    },
    infoContainer: {
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    songName: {
        fontSize: '1em',
    },
    singerName: {
        fontSize: '0.8em',
        color: 'grey',
    },
    buttonsContainer: {
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    sliderContainer: {
        width: '97%',
    },
    placeHolder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }


});

export default useStyles;