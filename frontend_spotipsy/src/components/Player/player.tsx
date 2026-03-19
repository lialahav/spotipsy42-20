import useStyles from "./playerStyles";
import type { Song } from "../../assets/types";
import { PlayArrow,  SkipNext, SkipPrevious, PauseSharp} from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { Button, Slider } from '@mui/material';

interface Props{
    setError: React.Dispatch<React.SetStateAction<string>>;
    currentSong: Song | undefined;
    setCurrentSong: (value: Song) => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    queue: Song[];
    setQueue: (value: Song[]) => void;
}

const Player: React.FC<Props> = (props:Props) => {
    const { classes } = useStyles();
    let audioPath = ''
    //todo: change later to a set state that the app sends
    if(props.currentSong != undefined){
        audioPath = new URL(`./songs/${props.currentSong.id}.mp3`, import.meta.url).href;
    }
    const startStopSong = (id:string) =>{
        if(props.isPlaying){
            props.setIsPlaying(false)
        }
        else{
            props.setIsPlaying(true)
        }
    }
    return (
        <div className={classes.container}>
            {props.currentSong != undefined &&
            <div>
                <div className={classes.infoContainer}>
                    <span className={classes.songName}>{ props.currentSong.name }</span>
                    <span className={classes.singerName}>{ props.currentSong.artist }</span>
                </div>
                    <div className={classes.buttonsContainer}>
                        <SkipPrevious></SkipPrevious>
                        <Button onClick={() =>startStopSong(props.currentSong.id)}>
                            {!props.isPlaying &&
                            <PlayArrow></PlayArrow>
                            }
                            {props.isPlaying &&
                            <div>
                                <PauseSharp></PauseSharp>
                                <audio controls>
                                    <source src={audioPath} type='audio/mpeg'/>
                                </audio>
                            </div>

                            }
                        </Button>
                        <SkipNext></SkipNext>
                    </div>
                    <div className={classes.sliderContainer}>
                        <Slider size="small">

                        </Slider>
                    </div>
                </div>
                }
                {props.currentSong == undefined &&
                    <div className={classes.infoContainer}>
                        <span className={classes.songName}>undefined</span>
                        <span className={classes.singerName}>undefined</span>
                    </div>
                }
            
        </div>
    )
}

export default Player;