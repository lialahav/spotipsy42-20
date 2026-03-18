import type { Playlist} from "../../assets/types";
import PlaylistItem from "../PlaylistItem/playlistItem";
import useStyles from "./PlaylistsPageStyles";
import { List } from "@mui/material";
import AddPlaylistButton from "../AddPlaylistButton/AddPlaylistButton";

interface props {
    playlistsList: Playlist[];
    setPlayListsList: (value:Playlist[]) => void;
}

const PlaylistsPage: React.FC<props> = ({ playlistsList, setPlayListsList}: props) => {
    const {classes} = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.title} lang="he" dir="rtl"> 
                <h2>הפלייליסטים שלי</h2>
                <AddPlaylistButton setPlayListsList= {setPlayListsList} playlistsList={playlistsList} />
            </div>
            <div className={classes.listContainer}>
                
                <List>
                    {playlistsList.map(playlist => <PlaylistItem key={playlist.id} name= {playlist.name} songsCount = {playlist.songIds.length} />)}
                </List>
            </div>

        </div>
    )
}

export default PlaylistsPage;