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
}

const AllSongs:React.FC<Props>= ({songsList,  isSongsLoading, error, favoriteSongsListId, setFavoriteSongsIdList, setError, playlistsList, setPlayListsList}: Props) =>{
    const {classes} = useStyles();

    return(
        <>
        {/*display loading texst incase info still loading*/}
        {isSongsLoading && <p>Loading...</p>}

        {/*display error*/}
        {error && <p>{error}</p>}

        {/*display songs*/}
        {!isSongsLoading && !error && (
            <div className={classes.container}>
                <div className={classes.title} lang="he" dir="rtl">
                    <h2>כל השירים</h2>
                </div>
                <div className={classes.listContainer}>
                    <SongsTable songsList={songsList} favoriteSongsListId={favoriteSongsListId} setFavoriteSongsIdList={setFavoriteSongsIdList} setError={setError}
                        playlistsList = {playlistsList} setPlayListsList = {setPlayListsList}/>
                </div>
                
            </div>
            
        )}
    </>
    )
}
export default AllSongs

