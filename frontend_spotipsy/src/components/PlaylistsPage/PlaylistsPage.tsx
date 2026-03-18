import type { Playlist} from "../../assets/types";
import PlaylistItem from "../PlaylistItem/playlistItem";
import useStyles from "./PlaylistsPageStyles";
import { List } from "@mui/material";

interface props {
    playlistsList: Playlist[];
}

const PlaylistsPage: React.FC<props> = ({ playlistsList}: props) => {
    const {classes} = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.title} lang="he" dir="rtl"> 
                <h2>הפלייליסטים שלי</h2>
                <button className={classes.buttonContainer}>+צור פלייליסט</button>
            </div>
            <div className={classes.listContainer}>
                
                <List>
                    {playlistsList.map(playlist => <PlaylistItem name= {playlist.name} songsCount = {playlist.songIds.length} />)}
                </List>
            </div>

        </div>
    )
}

export default PlaylistsPage;