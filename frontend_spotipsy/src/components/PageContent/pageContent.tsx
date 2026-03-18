import useStyles from "./pageContentStyles";
import type { Song} from "../../assets/types";
import FavoritePage from "../FavoritePage/FavoritePage";
import AllSongs from "../../assets/allSongs/allSongs";

interface props {
    currentPage: string;
    songsList: Song[];
    favoriteSongsListId: string[];
}

const PageContent: React.FC<props> = ({ currentPage, songsList, favoriteSongsListId}: props) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            {currentPage == 'songs' && <AllSongs/>}

            {currentPage == 'playlists'}

            {currentPage == 'favorites' && <FavoritePage songsList = {songsList} favoriteSongsListId = {favoriteSongsListId}/>}
        </div>
    )
}

export default PageContent;