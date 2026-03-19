import useStyles from "./pageContentStyles";
import type { Song, Playlist} from "../../assets/types";
import FavoritePage from "../FavoritePage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";
import AllSongs from "../../assets/allSongs/allSongs";

interface props {
    currentPage: string;
    songsList: Song[];
    favoriteSongsListId: string[];
    playlistsList: Playlist[];
    setPlayListsList: (value:Playlist[]) => void;
    isSongsLoading: boolean;
    error: string;
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
    currentSong: Song;
    setCurrentSong: (value: Song) => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    queue: Song[];
    setQueue: (value: Song[]) => void;

}

// currentSong ={currentSong} setCurrentSong = {setCurrentSong} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} queue = {queue} setQueue = {setQueue}

const PageContent: React.FC<props> = (props: props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            {props.currentPage == 'songs' && <AllSongs songsList ={props.songsList} isSongsLoading= {props.isSongsLoading} error = {props.error}
             favoriteSongsListId={props.favoriteSongsListId} setFavoriteSongsIdList={props.setFavoriteSongsIdList} setError={props.setError}
             playlistsList ={props.playlistsList} setPlayListsList={props.setPlayListsList}
            />}

            {props.currentPage == 'playlists' && <PlaylistsPage playlistsList = {props.playlistsList} 
            setPlayListsList = {props.setPlayListsList} songsList= {props.songsList} favoriteSongsListId={props.favoriteSongsListId} setFavoriteSongsIdList={props.setFavoriteSongsIdList} 
            setError={props.setError}
            />}

            {props.currentPage == 'favorites' && <FavoritePage songsList = {props.songsList} favoriteSongsListId = {props.favoriteSongsListId} 
            setFavoriteSongsIdList={props.setFavoriteSongsIdList} setError={props.setError} playlistsList = {props.playlistsList} setPlayListsList ={props.setPlayListsList}/>} 
        </div>
    )   
}


export default PageContent;