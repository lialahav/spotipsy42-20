import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { PlayArrow } from '@mui/icons-material'
import { Paper } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Add } from '@mui/icons-material'
import type { Song } from "../../assets/types";
import { ListItemText }from '@mui/material'
import { Button , IconButton, Menu, MenuItem} from '@mui/material'
import { useState } from 'react';
import type { Playlist } from '../../assets/types';
import useStyles from './songsTableStyles';
import theme from '../../theme';



interface Props{
    songsList:Song[];    
    favoriteSongsListId: string[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
    playlistsList: Playlist[];
    setPlayListsList: (value:Playlist[]) => void;
    currentSong: Song | undefined;
    setCurrentSong: (value: Song) => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    queue: Song[];
    setQueue: (value: Song[]) => void;
}

const SongsTable = (props:Props) =>{
    const {classes} = useStyles();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedSongId, setSelectedSongId] = useState<string | null>(null);
    const open = Boolean(anchorEl);

    const handleAddClick = (event: React.MouseEvent<HTMLElement>, songId: string) => {
        setAnchorEl(event.currentTarget);
        setSelectedSongId(songId);
    };

    const handleAddClose = () => {
        setAnchorEl(null);
    };
    
    const handleAddSongToPlaylist = (playlistId: string) => {
        handleAddSongPlaylistPostReq(playlistId)
        handleAddClose();
    }

    const handleFavoritRequest = (id:string) =>{
        if(props.favoriteSongsListId.includes(id)){
            handleremovePostRequest(id)
        }
        else{
            handleAddPostRequest(id)
        }
    }

    const handlePlayer = (song: Song) => {
        props.setQueue(props.songsList);
        props.setCurrentSong(song);
        props.setIsPlaying(true);
        
    }

    /**
     * Adds a song to a playlist
     * @param playlistId - playlist id
     * @param songId - song id
     */
    const handleAddSongPlaylistPostReq = async (playlistId: string) => {
        try{
            const response = await fetch(`http://127.0.0.1:5001/api/playlists/${playlistId}/add`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({'songId':selectedSongId})
            });

            const updatedPlaylist = await response.json();
            const playlistsWithoutCurrent = props.playlistsList.filter(playlist => playlist.id !== playlistId)

            props.setPlayListsList([...playlistsWithoutCurrent , updatedPlaylist]);
        } 
        catch (error){
            props.setError("Someting went wrong");
            console.error(error);
            return;
        }
    }
    
    //remove song from data in backend and fetch
    const handleremovePostRequest = async (id:string) => {
        try{
            const response = await fetch("http://127.0.0.1:5001/api/favorites/remove", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({'songId':id})
            });

            const favorites_data = await response.json();
            props.setFavoriteSongsIdList(favorites_data);
        } 
        catch (error){
            props.setError("Someting went wrong");
            console.error(error);
            return;
        }
    }

    //add song to data in backend and fetch
    const handleAddPostRequest = async (id:string) => {
        try{
            const response = await fetch("http://127.0.0.1:5001/api/favorites/add", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({'songId':id})
            });

            const favorites_data = await response.json();
            props.setFavoriteSongsIdList(favorites_data);
        } 
        catch (error){
            props.setError("Someting went wrong");
            console.error(error);
            return;
        }
    }
    
    return(
    <>
        <Paper style={{maxHeight: 600, overflow: 'auto'}}>
        <List className={classes.songsContainer}>
            {props.songsList.map((song, index) =>(
            <ListItem onClick={() => handlePlayer(song)} divider key={index} sx={{ display: 'flex', flexDirection: 'row', padding: 0}}>

                <PlayArrow style={{ color: theme.palette.primary.main }}></PlayArrow>

                    <ListItemText 
                    primary={`${song.name} ${song.artist}` }
                    sx={{ margin: 0 }}/>
                <IconButton onClick={(e) => handleAddClick(e, song.id)}>
                    <Add/>
                </IconButton>
                <Button onClick={() =>handleFavoritRequest(song.id)}>
                    {props.favoriteSongsListId.includes(song.id) &&
                        <Favorite />
                    }
                    {!props.favoriteSongsListId.includes(song.id) &&
                        <FavoriteBorder />
                    }
                </Button>
            </ListItem>
          ))}
        </List>
        </Paper>

        <Menu id="playlistMenu" anchorEl={anchorEl} open={open} onClose={handleAddClose} > 
            {props.playlistsList.map(playlist => (
                <MenuItem key={playlist.id} onClick={() => handleAddSongToPlaylist(playlist.id)}>
                    {playlist.name}
                </MenuItem>
            ))}  
        </Menu>
    </>

    )
}
export default SongsTable;
