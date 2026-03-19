import SongsTable from "../../assets/songsTable/songsTable";
import type { Song} from "../../assets/types";
import useStyles from "./FavoritePageStyles";

interface props {
    favoriteSongsListId: string[];
    songsList: Song[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

const FavoritePage: React.FC<props> = ({ favoriteSongsListId, songsList, setFavoriteSongsIdList, setError}: props) => {
    const {classes} = useStyles();
    const favoriteSongsList: Song[] = songsList.filter((song) => favoriteSongsListId.includes(song.id) )

    return (
        <div className={classes.container}>
            <div className={classes.title} lang="he" dir="rtl">
                <h2>המועדפים שלי</h2>
            </div>
            <div className={classes.listContainer}>
                <SongsTable songsList={favoriteSongsList} favoriteSongsListId={favoriteSongsListId} setFavoriteSongsIdList={setFavoriteSongsIdList} setError={setError}/>
            </div>
                
        </div>
    )
}

export default FavoritePage;