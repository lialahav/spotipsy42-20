import React from 'react'
import SongsTable from "../songsTable/songsTable.tsx";
import type { Song } from "../types.tsx";

interface Props {
    isSongsLoading: boolean;
    error: string;
    songsList: Song[];
}

const AllSongs:React.FC<Props>= ({songsList,  isSongsLoading, error}: Props) =>{
    return(
        <>
        {/*display loading texst incase info still loading*/}
        {isSongsLoading && <p>Loading...</p>}

        {/*display error*/}
        {error && <p>{error}</p>}

        {/*display songs*/}
        {!isSongsLoading && !error && (
            <SongsTable songsList={songsList}/>
        )}
    </>
    )
}
export default AllSongs
