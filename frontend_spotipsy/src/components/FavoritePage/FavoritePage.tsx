import type { Song} from "../../assets/types";
import SongsTable from "../../assets/songsTable/songsTable";

interface props {
    favoriteSongsListId: string[];
    songsList: Song[];
}

const FavoritePage: React.FC<props> = ({ favoriteSongsListId, songsList}: props) => {
    const favoriteSongsList: Song[] = songsList.filter((song) => favoriteSongsListId.includes(song.id) )

    return (
        <SongsTable songsList = {favoriteSongsList}/>
    )
}

export default FavoritePage;