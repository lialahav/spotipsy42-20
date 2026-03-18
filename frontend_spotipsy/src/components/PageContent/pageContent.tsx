import useStyles from "./pageContentStyles";
import type { Song, Playlist} from "../../assets/types";
import FavoritePage from "../FavoritePage/FavoritePage";
import PlaylistsPage from "../PlaylistsPage/PlaylistsPage";

interface props {
    currentPage: string;
    songsList: Song[];
    favoriteSongsListId: string[];
    playlistsList: Playlist[];
    setPlayListsList: (value:Playlist[]) => void;
}

const PageContent: React.FC<props> = ({ currentPage, songsList, favoriteSongsListId, playlistsList, setPlayListsList}: props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            {/* {currentPage == 'songs' && <AllSongsPage songsList = {songsList}/>} */}

            {currentPage == 'playlists' && <PlaylistsPage playlistsList = {playlistsList} setPlayListsList = {setPlayListsList}/>}

            {currentPage == 'favorites' && <FavoritePage songsList = {songsList} favoriteSongsListId = {favoriteSongsListId}/>}
        </div>
    )
}

export default PageContent;