import type { Playlist, Song} from "../../assets/types";
import PlaylistItem from "../PlaylistItem/playlistItem";
import useStyles from "./PlaylistsPageStyles";
import { List, IconButton  } from "@mui/material";
import AddPlaylistButton from "../AddPlaylistButton/AddPlaylistButton";
import { useState } from "react";
import SongsTable from "../../assets/songsTable/songsTable";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface props {
    playlistsList: Playlist[];
    setPlayListsList: (value:Playlist[]) => void;
    songsList: Song[];
    favoriteSongsListId: string[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
    currentSong: Song | undefined;
    setCurrentSong: (value: Song) => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    queue: Song[];
    setQueue: (value: Song[]) => void;
}

const PlaylistsPage: React.FC<props> = (props: props) => {
    const {classes} = useStyles();
    const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | false>(false);


    return (
        <>
            {!currentPlaylist && (
                <div className={classes.container}>
                    <div className={classes.title} lang="he" dir="rtl"> 
                        <h2>הפלייליסטים שלי</h2>
                        <AddPlaylistButton setPlayListsList= {props.setPlayListsList} playlistsList={props.playlistsList} />
                    </div>
                    <div className={classes.listContainer}>
                        
                        <List>
                            {props.playlistsList.map(playlist => <PlaylistItem key={playlist.id} name= {playlist.name} songsCount = {playlist.songIds.length} 
                            onChange={() => setCurrentPlaylist(playlist)}  />)}
                        </List>
                    </div>

                </div>
            )}

            {currentPlaylist && (
                <div className={classes.container}>
                    <div className={classes.title} lang="he" dir="rtl"> 
                        <h2>{currentPlaylist.name}</h2>
                        <IconButton onClick={()=>setCurrentPlaylist(false)}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </div>
                    <div className={classes.listContainer}>
                        
                        {<SongsTable songsList={props.songsList.filter(song => currentPlaylist.songIds.includes(song.id))} favoriteSongsListId={props.favoriteSongsListId}
                            setFavoriteSongsIdList={props.setFavoriteSongsIdList} setError={props.setError} playlistsList = {props.playlistsList} setPlayListsList= {props.setPlayListsList}
                            currentSong={props.currentSong} setCurrentSong={props.setCurrentSong} isPlaying={props.isPlaying} 
                            setIsPlaying={props.setIsPlaying} queue = {props.queue} setQueue={props.setQueue}/>}
                    </div>

                </div>
            )}
        </>
    )
}

export default PlaylistsPage;