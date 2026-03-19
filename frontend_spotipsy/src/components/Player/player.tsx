import useStyles from "./playerStyles";
import type { Song } from "../../assets/types";
import { PlayArrow,  SkipNext, SkipPrevious, PauseSharp} from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Button, Slider } from '@mui/material';

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
            <div className={classes.infoContainer}>
                <span className={classes.songName}>{ props.song.name }</span>
                <span className={classes.singerName}>{ props.song.artist }</span>
            </div>
            <div className={classes.buttonsContainer}>
                <SkipPrevious></SkipPrevious>
                <Button onClick={() =>startStopSong(props.song.id)}>
                    {!isPlaying &&
                    <PlayArrow></PlayArrow>
                    }
                    {isPlaying &&
                    <PauseSharp></PauseSharp>
                    }
                </Button>
                <SkipNext></SkipNext>
            </div>
            <div className={classes.sliderContainer}>
                <Slider size="small">

                </Slider>
            </div>
        </div>
    )
}

export default Player;