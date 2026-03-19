import React from 'react'
import SongsTable from "../songsTable/songsTable.tsx";
import type { Song, Playlist } from "../types.tsx";
import useStyles from './allsongsStyles.tsx';

interface Props {
    isSongsLoading: boolean;
    error: string;
    songsList: Song[];
    favoriteSongsListId: string[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
    playlistsList: Playlist[];
    setPlayListsList:  (value:Playlist[]) => void;
    currentSong: Song | undefined;
    setCurrentSong: (value: Song) => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    queue: Song[];
    setQueue: (value: Song[]) => void;





}

const AllSongs:React.FC<Props>= (props: Props) =>{
    const {classes} = useStyles();

    return(
        <>
        {/*display loading texst incase info still loading*/}
        {props.isSongsLoading && <p>Loading...</p>}

        {/*display error*/}
        {props.error && <p>{props.error}</p>}

        {/*display songs*/}
        {!props.isSongsLoading && !props.error && (
            <div className={classes.container}>
                <div className={classes.title} lang="he" dir="rtl">
                    <h2>כל השירים</h2>
                </div>
                <div className={classes.listContainer}>
                    <SongsTable songsList={props.songsList} favoriteSongsListId={props.favoriteSongsListId}
                        setFavoriteSongsIdList={props.setFavoriteSongsIdList} setError={props.setError}
                        playlistsList = {props.playlistsList} setPlayListsList = {props.setPlayListsList} 
                        currentSong={props.currentSong} setCurrentSong={props.setCurrentSong} isPlaying={props.isPlaying} 
                        setIsPlaying={props.setIsPlaying} queue = {props.queue} setQueue={props.setQueue}/>
                </div>
                
            </div>
            
        )}
    </>
    )
}


export default AllSongs

