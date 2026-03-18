import type { Song } from "C:/Users/nir_l/OneDrive/Desktop/army/spotipsy42-20/frontend_spotipsy/src/assets/types.tsx";
import { ListItemText }from '@mui/material'
interface Props{
    song:Song;
}


const MakeSong = (props:Props) =>{
    return(
        <ListItemText 
          primary={`${props.song.name} ${props.song.artist}` }
          sx={{ margin: 0 }}
        />
    )
}
export default MakeSong