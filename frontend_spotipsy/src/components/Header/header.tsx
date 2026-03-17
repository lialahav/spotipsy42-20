import useStyles from "./headerStyles";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const Header: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.headerContainer}>
                <h3>SpotiPSI</h3>
                <MusicNoteIcon />
            </div>
        </div>
    )
}

export default Header;