import SongsTable from "../../assets/songsTable/songsTable";
import type { Song} from "../../assets/types";

interface props {
    favoriteSongsListId: string[];
    songsList: Song[];
    setFavoriteSongsIdList:React.Dispatch<React.SetStateAction<string[]>>;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

const FavoritePage: React.FC<props> = ({ favoriteSongsListId, songsList, setFavoriteSongsIdList, setError}: props) => {
    const favoriteSongsList: Song[] = songsList.filter((song) => favoriteSongsListId.includes(song.id) )

    return (
        <SongsTable songsList={favoriteSongsList} favoriteSongsListId={favoriteSongsListId} setFavoriteSongsIdList={setFavoriteSongsIdList} setError={setError}/>

    )
}

export default FavoritePage;