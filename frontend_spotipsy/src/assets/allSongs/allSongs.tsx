import LoadSongs from "../loadSongs/loadSongs";
import React from 'react'
import SongsTable from "../songsTable/songsTable.tsx";

const AllSongs:React.FC= () =>{
    const {songsList, isLoading, error} = LoadSongs()
    return(
        <>
        {/*display loading texst incase info still loading*/}
        {isLoading && <p>Loading...</p>}

        {/*display error*/}
        {error && <p>{error}</p>}

        {/*display songs*/}
        {!isLoading && !error && (
            <SongsTable songsList={songsList}/>
        )}
    </>
    )
}
export default AllSongs
