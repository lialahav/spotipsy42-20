import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header/header';
import Player from './components/Player/player';
import Sidebar from './components/Sidebar/sidebar';
import PageContent from './components/PageContent/pageContent';
import useStyles from './AppStyles';
import React, { useState, useEffect } from 'react'
import type { Song } from "./assets/types.tsx";

const App: React.FC = () => {
  const { classes} = useStyles();
  const [songsList, setSongsList] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [currentPage, setCurrentPage] = useState<string>('songs');


  /**
   * async function to fetch songs
   */
  const fetchSongs = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);


// return (
//     <div>
//       {/*display loading texst incase info still loading*/}
//       {isLoading && <p>Loading...</p>}

//       {/*display error*/}
//       {error && <p>{error}</p>}

//       {/*display songs*/}
//       {!isLoading && !error && songsList.map((song, index) =>(
//         <div key={index}>
//           <h2>{song.name}</h2>
//         </div>
//       ))}
//     </div>
//   )
// }
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <Header />

        <div className={classes.mainSection}>
          <PageContent/>
          <Sidebar onChange={(value) => {setCurrentPage(value)}}/>
        </div>

        <Player />
      </div>
    </ThemeProvider>
  )
}

export default App;
