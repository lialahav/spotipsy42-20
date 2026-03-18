import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { PlayArrow } from '@mui/icons-material'
import { ListItemIcon } from '@material-ui/core';
import { Paper } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'
import { Add } from '@mui/icons-material'
import type { Song } from "C:/Users/nir_l/OneDrive/Desktop/army/spotipsy42-20/frontend_spotipsy/src/assets/types.tsx";
import { ListItemText }from '@mui/material'
import { useState } from 'react';


interface Props{
    songsList:Song[];    

}

const SongsTable = (props:Props) =>{
    const manageFavorits = (id:string) =>{
        console.log("hello")
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
                <button onClick={() =>manageFavorits(song.id)}>
                    <FavoriteBorder></FavoriteBorder>
                </button>
                <Add></Add>
            </ListItem>
          ))}
        </List>
        </Paper>
    </>

    )
}
export default SongsTable
