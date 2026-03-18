import useStyles from "./sidebarStyles";
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface props {
    onChange: (value: string)=> void; 
}

const Sidebar: React.FC<props> = ({onChange}: props) => {
    const { classes } = useStyles();


    return (
        <div className={classes.container} >
            <div className={classes.allSongsButton} onClick={() => onChange('songs')}>
                <div className={classes.text}>
                    <span>כל השירים</span>
                </div>

                <div className={classes.icon}>
                    <HomeIcon />
                </div>
            </div>

            <div className={classes.allSongsButton} onClick={() => onChange('playlists')}>
                <div className={classes.text}>
                    <span>פלייליסטים</span>
                </div>

                <div className={classes.icon}>
                    <LibraryMusicIcon />
                </div>
            </div>

            <div className={classes.allSongsButton} onClick={() => onChange('favorites')}>
                <div className={classes.text}>
                    <span>מועדפים</span>
                </div>

                <div className={classes.icon}>
                    <FavoriteIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;