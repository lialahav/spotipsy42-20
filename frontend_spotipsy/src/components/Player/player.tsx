import useStyles from "./playerStyles";
import type { Song } from "../../assets/types"
import { PlayArrow,  SkipNext, SkipPrevious, PauseSharp} from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
interface Props{
    song:Song;
}
const Player: React.FC<Props> = (props:Props) => {
    const { classes } = useStyles();
    //todo: change later to a set state that the app sends
    const [isPlaying, setisPlaying] = useState<boolean>(false);
    
    const startStopSong = (id:string) =>{
        if(isPlaying){
            setisPlaying(false)
        }
        else{
            setisPlaying(true)
        }
    }
    return (
        <div className={classes.container}>
            <p className={classes.p}>{ props.song.name }</p>
            <p className={classes.p}>{ props.song.artist }</p>
            <div className={classes.buttonsContainer}>
                <SkipPrevious></SkipPrevious>
                <Button onClick={() =>startStopSong(props.song.id)}>
                    {isPlaying &&
                    <PlayArrow></PlayArrow>
                    }
                    {!isPlaying &&
                    <PauseSharp></PauseSharp>
                    }
                </Button>
                <SkipNext></SkipNext>
            </div>
        </div>
    )
}

export default Player;