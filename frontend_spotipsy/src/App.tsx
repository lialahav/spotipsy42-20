import React, { useState, useEffect } from 'react'
import type { Song } from "./assets/types.tsx";

import './App.css'

const App :React.FC= () =>{
  const [songsList, setSongsList] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  //async function to fetch songs
  const fetchSongs = async () => {
    //start loading songs
    setIsLoading(true);
    try{
      //access server
      const response = await fetch("http://127.0.0.1:5001/api/songs")//todo:add url
      const data = await response.json();
      //add songs to songs list
      setSongsList(data);
    } 
    catch (error){
      //display error
      setError("Someting went wrong");
      console.error(error);
      return;
    }
    finally {
      // set end of songs loading
      setIsLoading(false);
    }
  };
  //load songs only at the first calling of the component
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      {/*display loading texst incase info still loading*/}
      {isLoading && <p>Loading...</p>}

      {/*display error*/}
      {error && <p>{error}</p>}

      {/*display songs*/}
      {!isLoading && !error && songsList.map((song, index) =>(
        <div key={index}>
          <h2>{song.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
