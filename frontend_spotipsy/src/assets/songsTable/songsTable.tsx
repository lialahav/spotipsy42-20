import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { PlayArrow } from '@mui/icons-material'
import { ListItemIcon } from '@mui/material';
import { Paper } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'
import { Add } from '@mui/icons-material'
import type { Song } from "../types";
import { ListItemText }from '@mui/material'


interface Props{
    songsList:Song[]
}

const SongsTable = (props:Props) =>{

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

                <FavoriteBorder></FavoriteBorder>
                <Add></Add>
            </ListItem>
          ))}
        </List>
        </Paper>
    </>

    )
}
export default SongsTable
