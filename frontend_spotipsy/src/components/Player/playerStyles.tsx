import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
    container: {
        backgroundColor: 'rgba(32, 32, 32, 1)',
        flexDirection: 'column',
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid rgba(49, 49, 49, 1)',

    },buttonsContainer :{
        height:'50%',
    },p: {
        height: '10%',
    },


});

export default useStyles;