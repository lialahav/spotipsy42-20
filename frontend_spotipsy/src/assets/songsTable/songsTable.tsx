import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { PlayArrow } from '@mui/icons-material'
import { ListItemIcon } from '@mui/material';
import { Paper } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'
import { Favorite } from '@mui/icons-material'
import { Add } from '@mui/icons-material'
import type { Song } from "../types";
import { ListItemText }from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react';


interface Props{
    songsList:Song[];    
    favoriteSongsListId: string[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

const SongsTable = (props:Props) =>{
    
    const handleFavoritRequest = (id:string) =>{
        if(props.favoriteSongsListId.includes(id)){
            handleremovePostRequest(id)
        }
        else{
            handleAddPostRequest(id)
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
        <List className='songsContainer'>
            {props.songsList.map((song, index) =>(
            <ListItem divider key={index} sx={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                <ListItemIcon>
                <PlayArrow></PlayArrow>
                </ListItemIcon>
                    <ListItemText 
                    primary={`${song.name} ${song.artist}` }
                    sx={{ margin: 0 }}/>
                <Button onClick={() =>handleFavoritRequest(song.id)}>
                    {props.favoriteSongsListId.includes(song.id) &&
                        <Favorite></Favorite>
                    }
                    {!props.favoriteSongsListId.includes(song.id) &&
                        <FavoriteBorder></FavoriteBorder>
                    }
                </Button>

                <Add></Add>
            </ListItem>
          ))}
        </List>
        </Paper>
    </>

    )
}
export default SongsTable
