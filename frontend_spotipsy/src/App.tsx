import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header/header';
import Player from './components/Player/player';
import Sidebar from './components/Sidebar/sidebar';
import PageContent from './components/PageContent/pageContent';
import useStyles from './AppStyles';
import React, { useState, useEffect } from 'react'
import type { Song} from "./assets/types.tsx";

const App: React.FC = () => {
  const { classes} = useStyles();
  const [songsList, setSongsList] = useState<Song[]>([]);
  const [isSongsLoading, setIsSongsLoading] = useState(false);
  const [isFavoritesLoading, setIsFavoritesLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [currentPage, setCurrentPage] = useState<string>('songs');
  const [favoriteSongsListId, setFavoriteSongsIdList] = useState<string[]>([]);


  /**
   * Async function to fetch all songs
   */
  const fetchSongs = async () => {
    setIsSongsLoading(true);
    try{

      const response = await fetch("http://127.0.0.1:5001/api/songs")
      const data = await response.json();
      setSongsList(data);
    } 
    catch (error){
      setError("Someting went wrong");
      console.error(error);
      return;
    }
    finally {
      setIsSongsLoading(false);
    }
  };

  /**
   * Async function to fetch all the ids of the favorite songs
   * @returns 
   */
  const fetchFavoriteSongs = async () => {
        setIsFavoritesLoading(true);
    try{

      const response = await fetch("http://127.0.0.1:5001/api/favorites")
      const data = await response.json();
      setFavoriteSongsIdList(data);
    } 
    catch (error){
      setError("Someting went wrong");
      console.error(error);
      return;
    }
    finally {
      setIsFavoritesLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchFavoriteSongs();
  }, []);


// return (
//     <div>
//       {/* display loading texst incase info still loading
//       {isFavoritesLoading && <p>Loading...</p>}

//       {/*display error*/}
//       {error && <p>{error}</p>}

//       {/*display songs*/}
//       {!isFavoritesLoading && !error && favoriteSongsListId.map((song, index) =>(
//         <div key={index}>
//           <h2>{song}</h2>
//         </div>
//       ))} */}
//     </div>
//   )
// }
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <Header />

        <div className={classes.mainSection}>
          <PageContent currentPage = {currentPage} songsList = {songsList} favoriteSongsListId = {favoriteSongsListId}/>
          <Sidebar onChange={(value) => {setCurrentPage(value)}}/>
        </div>

        <Player />
      </div>
    </ThemeProvider>
  )
}

export default App;
