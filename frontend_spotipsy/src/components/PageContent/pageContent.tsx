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
}

const PageContent: React.FC<props> = ({ currentPage, songsList, favoriteSongsListId, playlistsList, setPlayListsList, isSongsLoading, error }: props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            {currentPage == 'songs' && <AllSongs songsList ={songsList} isSongsLoading= {isSongsLoading} error = {error}/>}

            {currentPage == 'playlists' && <PlaylistsPage playlistsList = {playlistsList} setPlayListsList = {setPlayListsList} songsList= {songsList}/>}

            {currentPage == 'favorites' && <FavoritePage songsList = {songsList} favoriteSongsListId = {favoriteSongsListId}/>}
        </div>
    )
}

export default PageContent;