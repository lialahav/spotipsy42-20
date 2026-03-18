import useStyles from "./playerStyles";

const Player: React.FC = () => {
    const { classes } = useStyles();


    return (
        <div className={classes.container}>
            <p>נגן שירים</p>
        </div>
    )
}

export default Player;