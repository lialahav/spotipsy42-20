import useStyles from "./playerStyles";
import type { Song } from "../../assets/types";
import { PlayArrow,  SkipNext, SkipPrevious, PauseSharp} from '@mui/icons-material';
import React, { useState, useEffect, useRef } from 'react';
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

    const audioRef = useRef<HTMLAudioElement | null>(null);

    let audioPath = ''
    //todo: change later to a set state that the app sends
    if(props.currentSong != undefined){
        audioPath = new URL(`./songs/${props.currentSong.id}.mp3`, import.meta.url).href;
    }

    const startStopSong = () =>{
        if(props.isPlaying){
            props.setIsPlaying(false)
        }
        else{
            props.setIsPlaying(true)
        }
    }

    useEffect(() => {
        if (!audioRef.current) return;

        if (props.isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [props.isPlaying, props.currentSong]);


    return (
        <>
            {props.currentSong != undefined && (
                <div className={classes.container}>
                    <div className={classes.infoContainer}>
                        <span className={classes.songName}>{ props.currentSong.name }</span>
                        <span className={classes.singerName}>{ props.currentSong.artist }</span>
                    </div>
                    <div className={classes.buttonsContainer}>
                        <SkipPrevious />

                        <Button onClick={() =>startStopSong()}>
                            {!props.isPlaying && <PlayArrow />}
                            {props.isPlaying && <PauseSharp />}
                                
                        </Button>
                        
                        <SkipNext />
                    </div>

                    <audio ref={audioRef}>
                        <source src={audioPath} type='audio/mpeg'/>
                    </audio>

                    <div className={classes.sliderContainer}>
                        <Slider size="small" />
                    </div>
                </div>
            )}
                {props.currentSong == undefined &&
                    <div className={classes.infoContainer}>
                    </div>
                }
        </>
            
    )
}

export default Player;