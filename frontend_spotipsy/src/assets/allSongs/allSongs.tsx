import React from 'react'
import SongsTable from "../songsTable/songsTable.tsx";
import type { Song } from "../types.tsx";

interface Props {
    isSongsLoading: boolean;
    error: string;
    songsList: Song[];
    favoriteSongsListId: string[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

const AllSongs:React.FC<Props>= ({songsList,  isSongsLoading, error, favoriteSongsListId, setFavoriteSongsIdList, setError}: Props) =>{
    return(
        <>
        {/*display loading texst incase info still loading*/}
        {isSongsLoading && <p>Loading...</p>}

        {/*display error*/}
        {error && <p>{error}</p>}

        {/*display songs*/}
        {!isSongsLoading && !error && (
            <SongsTable songsList={songsList} favoriteSongsListId={favoriteSongsListId} setFavoriteSongsIdList={setFavoriteSongsIdList} setError={setError}/>
        )}
    </>
    )
}
export default AllSongs
